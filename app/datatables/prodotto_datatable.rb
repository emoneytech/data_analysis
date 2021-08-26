class ProdottoDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      id: { source: "Prodotto.id", cond: :eq },
      product_id: { source: "Prodotto.idprodotto", cond: :eq },
      name: { source: "Prodotto.nome", cond: :like },
      table_code: { codtabella: "Prodotto.codtabella", cond: :eq },
      table_name: { nometabella: "Prodotto.nometabella", cond: :like }
    }
  end

  def data
    records.map do |record|
      {
        # example:
        id: record.id,
        product_id: record.idprodotto,
        name: record.nome,
        table_code: record.codtabella,
        table_name: record.nometabella
      }
    end
  end

  def get_raw_records
    # insert query here
    Prodotto.all
  end

end
