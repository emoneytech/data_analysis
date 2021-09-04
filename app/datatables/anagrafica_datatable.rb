class AnagraficaDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable
  def_delegators :@view, :link_to, :customers_anagrafica_path

  def initialize(params, opts = {})
    @view = opts[:view_context]
    super
  end

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id: { source: "Anagrafica.IdUtente" },
      full_name: { source: "Anagrafica.RagioneSociale", searchable: false, orderable: false },
      vendor: { source: "Anagrafica.vendor", cond: :eq, searchable: true, orderable: true },
      base_risk: { source: "Anagrafica.base_risk", searchable: true, orderable: true },
      rischio_corrente: { source: "Rischio.Rischio", searchable: false, orderable: false },
      created: { source: "Anagrafica.created", searchable: true, orderable: true },
      actions: { searchable: false, orderable: false }
    }
  end

  def data
    records.map do |record|
      {
        id: record.id,
        full_name: record.full_name,
        vendor: record.vendor,
        base_risk: record.base_risk,
        rischio_corrente: record.rischio_corrente,
        created: record.created,
        actions: link_to('<i class="fa fas fa-eye"></i>'.html_safe, customers_anagrafica_path(record), class: "btn btn-xs btn-primary")
      }
    end
  end

  def get_raw_records
    Anagrafica.filter(filtering_params).alive
  end
private
  def filtering_params
    params[:filter] ? params[:filter].slice(
      :full_name,
      :min_base_risk,
      :rischio_corrente,
      :vendor
    ).permit! : {}
  end

end
