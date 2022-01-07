module DataAnalysis
  class MatviewsController < ApplicationController
    before_action(only: :index) { authorize! :admin, :dashboard }

    def index
      if params[:filter] 
        start_date, end_date = params[:filter][:daterange].split(' - ') if params[:filter][:daterange]
        vendors = params[:filter][:vendor]                              if params[:filter][:vendor]
      else
        @end_date = Date.today
        @start_date = @end_date - 1.month
      end
      @sql ="
              SELECT 
                movimenticonti.idmovimenticonti, 
                movimenticonti.idtransazione, 
                anagrafiche.idutente, 
                anagrafiche.nome, 
                anagrafiche.cognome, 
                anagrafiche.ragionesociale, 
                anagrafiche.vendor, 
                movimenticonti.numeroconto, 
                movimenticonti.contodiprovenienza, 
                movimenticonti.contodestinazione, 
                movimenticonti.datamovimento, 
                movimenticonti.datanumerica, 
                movimenticonti.dare, 
                movimenticonti.avere, 
                movimenticonti.importo, 
                movimenticonti.valuta, 
                movimenticonti.saldoprog, 
                movimenticonti.idcausale, 
                movimenticonti.causale, 
                movimenticonti.cro, 
                movimenticonti.idmandato,
                servizi.idservizio
              FROM movimenticonti, anagrafiche, servizi
              WHERE servizi.point = anagrafiche.idutente
              AND movimenticonti.idtransazione = servizi.idservizio
            "
      @sql += "
                AND movimenticonti.datamovimento BETWEEN '#{start_date.to_date.beginning_of_day}' 
                AND '#{end_date.to_date.end_of_day}'" if start_date && end_date
      @sql += "
                AND anagrafiche.vendor = '#{vendors}'" if vendors
      @sql += "
                ORDER BY movimenticonti.idmovimenticonti DESC LIMIT 100
              "
    end

    def create_matview
      ActiveRecord::Base.establish_connection :core_pg
      query1 = "SELECT * FROM dbconti_prod.row_counts ORDER BY relname ASC "
      ActiveRecord::Base.connection.select_all(query1)
  
    end

  end
end
