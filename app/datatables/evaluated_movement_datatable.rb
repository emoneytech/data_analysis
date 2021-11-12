class EvaluatedMovementDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable
  def_delegators :@view, :link_to, :data_analysis_evaluated_movement_path, :customers_anagrafica_path, :humanized_money_with_symbol

  def initialize(params, opts = {})
    @view = opts[:view_context]
    @filtering_params = opts[:filtering_params]
    binding.pry

    super
  end

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id: { source: "EvaluatedMovement.id" },
      internal: { source: "EvaluatedMovement.internal" },
      triggerable: { source: "EvaluatedMovement.triggerable" },
      movement_created_at: { source: "EvaluatedMovement.movement_created_at" },
      customer: { source: "EvaluatedMovement.customer" },
      beneficiary: { source: "EvaluatedMovement.beneficiary" },
      payer: { source: "EvaluatedMovement.payer" },
      product_id: { source: "EvaluatedMovement.product_id" },
      product_name: { source: "EvaluatedMovement.product_name" },
      product_base_risk: { source: "EvaluatedMovement.product_base_risk" },
      origin_country: { source: "EvaluatedMovement.origin_country" },
      origin_lonlat: { source: "EvaluatedMovement.origin_lonlat" },
      destination_country: { source: "EvaluatedMovement.destination_country" },
      destination_lonlat: { source: "EvaluatedMovement.destination_lonlat" },
      amount_cents: { source: "EvaluatedMovement.amount_cents" },
      recursion_all_7: { source: "EvaluatedMovement.recursion_all_7" },
      recursion_all_30: { source: "EvaluatedMovement.recursion_all_30" },
      actions: { searchable: false, orderable: false }
    }
  end

  def data
    records.map do |record|
      {
        id: record.id,
        internal: record.internal,
        triggerable: record.triggerable,
        movement_created_at: record.movement_created_at,
        customer: link_to(record.customer, customers_anagrafica_path(record.customer)),
        beneficiary: record.beneficiary,
        payer: record.payer,
        product_id: record.product_id,
        product_name: record.product_name,
        product_base_risk: record.product_base_risk,
        origin_country: record.origin_country,
        origin_lonlat: record.origin_lonlat,
        destination_country: record.destination_country,
        destination_lonlat: record.destination_lonlat,
        amount_cents: humanized_money_with_symbol(record.amount),
        recursion_all_7: record.recursion_all_7,
        recursion_all_30: record.recursion_all_30,
        actions: link_to('<i class="fa fas fa-eye"></i>'.html_safe, data_analysis_evaluated_movement_path(record), class: "btn btn-xs btn-primary")
      }
    end
  end

  def get_raw_records
    # insert query here
    EvaluatedMovement.filter(@filtering_params).order(movement_created_at: :desc)
  end
private
  

end
