module Customers
  class NotesController < CustomersController
    add_breadcrumb helpers.raw("#{helpers.fa_icon(Note.icon)} #{Note.model_name.human(count: 2)}"), [:customers, :anagrafica, :notes]

    def index
      @notes = @anagrafica.notes.order(created_at: :desc).page(params[:page]).per(30)
    end

    def show
      add_breadcrumb @note.subject, [:customers, :anagrafica, :note]

    end
    

  end
end
