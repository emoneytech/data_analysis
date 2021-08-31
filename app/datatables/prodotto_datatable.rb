class ProdottoDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id: { source: "Prodotto.id" },
      idprodotto: { source: "Prodotto.idprodotto" },
      nome: { source: "Prodotto.nome", cond: :like, searchable: true, orderable: true },
      codtabella: { codtabella: "Prodotto.codtabella", searchable: false, orderable: false },
      nometabella: { nometabella: "Prodotto.nometabella", searchable: false, orderable: false }
    }
  end

  def data
    records.map do |record|
      {
        # example:
        id: record.id,
        idprodotto: record.idprodotto,
        nome: record.nome,
        codtabella: record.codtabella,
        nometabella: record.nometabella
      }
    end
  end

  def get_raw_records
    # insert query here
    Prodotto.eager_load(:codicetabella).all
  end

end
