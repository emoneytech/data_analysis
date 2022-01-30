class EvaluatedMovementDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable
  def_delegators :@view, :link_to, :data_analysis_evaluated_movement_path, :customers_anagrafica_path, :humanized_money_with_symbol

  def initialize(params, opts = {})
    @view = opts[:view_context]
    super
  end

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id: { source: "EvaluatedMovement.id" },
      triggerable: { source: "EvaluatedMovement.triggerable" },
      movement_created_at: { source: "EvaluatedMovement.movement_created_at" },
      customer: { source: "EvaluatedMovement.customer" },
      payer: { source: "EvaluatedMovement.payer" },
      payer_other: { source: "EvaluatedMovement.payer_other" },
      reason: { source: "EvaluatedMovement.reason" },
      beneficiary: { source: "EvaluatedMovement.beneficiary" },
      product_name: { source: "EvaluatedMovement.product_name" },
      product_id: { source: "EvaluatedMovement.product_id" },
      product_base_risk: { source: "EvaluatedMovement.product_base_risk" },
      recursions_all: { source: "EvaluatedMovement.recursions_all" },
      recursions_customer: { source: "EvaluatedMovement.recursions_customer" },

      evaluated_factor7: { source: "EvaluatedMovement.evaluated_factor7" },
      evaluated_factor30: { source: "EvaluatedMovement.evaluated_factor30" },
      amount_cents: { source: "EvaluatedMovement.amount_cents" },
      destination_lonlat: { source: "EvaluatedMovement.destination_lonlat" },
      internal: { source: "EvaluatedMovement.internal" },
      origin_country: { source: "EvaluatedMovement.origin_country" },
      destination_country: { source: "EvaluatedMovement.destination_country" },
      actions: { searchable: false, orderable: false }
    }
  end

  def data
    records.map do |record|
      {
        id: record.id,
        triggerable: record.triggerable,
        movement_created_at: record.movement_created_at,
        customer: link_to(record.customer, customers_anagrafica_path(record.customer)),
        payer: record.payer,
        payer_other: record.payer_other,
        reason: record.reason,
        beneficiary: record.beneficiary,
        product_name: record.product_name,
        product_id: record.product_id,
        product_base_risk: record.product_base_risk,
        recursions_all: "#{record.recursion_all_7} / #{record.recursion_all_30}",
        recursions_customer: "#{record.recursion_customer_7} / #{record.recursion_customer_30}",
        evaluated_factor7: record.evaluated_factor7,
        evaluated_factor30: record.evaluated_factor30,
        amount_cents: humanized_money_with_symbol(record.amount),
        destination_lonlat: record.destination_lonlat,
        internal: record.internal,
        origin_country: record.origin_country,
        destination_country: record.destination_country,
        actions: link_to('<i class="fa fas fa-eye"></i>'.html_safe, data_analysis_evaluated_movement_path(record), class: "btn btn-xs btn-primary")
      }
    end
  end

  def get_raw_records
    # insert query here
    EvaluatedMovement.order(movement_created_at: :desc)
  end
private
  

end
