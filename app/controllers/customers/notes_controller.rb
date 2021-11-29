class Customers::NotesController < CustomersController
  add_breadcrumb helpers.raw("#{helpers.fa_icon(Note.icon)} #{Note.model_name.human(count: 2)}"), [:customers, :anagrafica, :notes]

  def index
    @notes = @anagrafica.notes.order(created_at: :desc).page(params[:page]).per(30)
  end

  def show
    add_breadcrumb @note.subject, [:customers, :anagrafica, :note]
  end

  def new
    @note = Note.new
  end

  # GET /notes/1/edit
  def edit
  end

  # POST /notes
  # POST /notes.json
  def create
    @note = @anagrafica.notes.build(note_params)
    @note.user = current_user
    respond_to do |format|
      if @note.save
        format.html { redirect_to [:customers, @anagrafica, @note], notice: I18n.t(:resource_was_succefully_created, resource: Note.model_name.human)}
        format.json { render :show, status: :created, location: @note }
      else
        format.html { render :new }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /notes/1
  # PATCH/PUT /notes/1.json
  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to @note, notice: 'Note was successfully updated.' }
        format.json { render :show, status: :ok, location: @note }
      else
        format.html { render :edit }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

private

  # Never trust parameters from the scary internet, only allow the white list through.
  def note_params
    params.require(:note).permit(:id, :subject, :body)
  end

end
