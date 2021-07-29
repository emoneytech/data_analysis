# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "AffiliateCode", primary_key: "idAffiliateCode", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Code", limit: 245
    t.bigint "IdUtente"
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "Agreement", primary_key: "idAgreement", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Versione", limit: 45
    t.text "Ita", size: :long
    t.text "Esp", size: :long
    t.text "Eng", size: :long
    t.datetime "DataPubblicazione"
    t.datetime "DataScadenza"
    t.integer "Stato", default: 0
    t.bigint "Operatore", default: 0
  end

  create_table "AnagraficheIban", primary_key: "idAnagraficheIban", id: :integer, charset: "utf8", force: :cascade do |t|
    t.string "Iban", limit: 45, null: false
    t.string "Nominativo", null: false
    t.string "Indirizzo"
    t.string "Vendor", limit: 45
    t.integer "Stato", default: 0
    t.datetime "DataValidazione"
    t.bigint "OperatoreValidazione"
    t.index ["Iban"], name: "Iban_UNIQUE", unique: true
    t.index ["idAnagraficheIban"], name: "idAnagraficheIban_UNIQUE", unique: true
  end

  create_table "BonificiRifiutati", primary_key: "IdServizio", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "Causale", limit: 245
    t.integer "CheckTransaction", default: 0
    t.bigint "IdMovimentoValidazione"
    t.decimal "Importo", precision: 12, scale: 2
    t.index ["IdMovimentoValidazione"], name: "idmov"
  end

  create_table "Bottoni", primary_key: "ID", id: :integer, charset: "latin1", comment: "rappresenta tutti i bottoni disponibili indicando anche la sezione a cui appartiene\nle personalizzazioni sono gestite via codice", force: :cascade do |t|
    t.string "Nome", limit: 45
    t.string "Link", limit: 60
    t.string "Icona", limit: 45
    t.integer "IdSezione", null: false
    t.string "Operatore", limit: 45
    t.string "Gruppo", limit: 4
    t.string "Servizio", limit: 45
    t.index ["ID"], name: "ID_UNIQUE", unique: true
  end

  create_table "CCRicariche", primary_key: ["IdCarta", "Id"], charset: "latin1", force: :cascade do |t|
    t.integer "IdCarta", null: false, auto_increment: true
    t.bigint "IdUtente", null: false
    t.string "Descrizione", limit: 45
    t.string "CardHolder", limit: 45
    t.string "Carta", limit: 45
    t.string "Cvc", limit: 45
    t.string "Scadenza", limit: 45
    t.string "Stato", limit: 45
    t.string "IdTransaction", limit: 45
    t.string "Id", limit: 145, null: false
    t.decimal "ImportoVerifica", precision: 10, scale: 2
    t.date "DataVerifica"
    t.string "Verifica", limit: 45
    t.integer "Position", default: 0
    t.integer "Favorite", default: 0
    t.index ["Id", "IdUtente"], name: "Id_UNIQUE", unique: true
  end

  create_table "ConfigurazioneRiserva", primary_key: "IdUtente", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.integer "Percentuale"
    t.integer "DurataBlocco"
    t.string "ContoRiserva", limit: 20
  end

  create_table "ControlloOperatori", primary_key: "IdControlloOperatore", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "IdOperatore", null: false
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
    t.bigint "IdUtente", null: false
    t.index ["IdOperatore"], name: "operatore"
    t.index ["IdUtente"], name: "utente"
  end

  create_table "Crypto", primary_key: "IdUtente", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "Label", limit: 45
    t.string "Address", limit: 45
    t.string "UserId", limit: 45
    t.string "Network", limit: 45
  end

  create_table "GrandiReti", primary_key: "Vendor", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "Descrizione", limit: 45
  end

  create_table "IbanBollettini", primary_key: "CcPostale", id: { type: :string, limit: 20 }, charset: "latin1", force: :cascade do |t|
    t.string "Intestatario", limit: 150
    t.string "Iban", limit: 45
    t.string "Swift", limit: 45
    t.string "Banca", limit: 100
    t.string "label1", limit: 100
    t.string "label1a", limit: 45
    t.string "label2", limit: 100
    t.string "label2a", limit: 45
    t.string "label3", limit: 100
    t.string "label3a", limit: 45
    t.integer "Confermato", default: 0
    t.integer "IdOperatore"
    t.datetime "DataUltimaModifica"
  end

  create_table "Limiti", primary_key: "Conto", id: { type: :string, limit: 20 }, charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente"
    t.decimal "Giornaliero", precision: 10, scale: 2, default: "0.0"
    t.decimal "Settimanale", precision: 12, scale: 2, default: "0.0"
    t.decimal "Mensile", precision: 12, scale: 2, default: "0.0"
    t.decimal "Annuale", precision: 12, scale: 2, default: "0.0"
    t.decimal "Singola", precision: 10, scale: 2, default: "0.0"
    t.decimal "TurnOver", precision: 12, scale: 2, default: "0.0"
    t.decimal "Balance", precision: 12, scale: 2, default: "0.0"
  end

  create_table "Mastercard", primary_key: "idMastercard", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "pan", limit: 45
    t.string "cardholderID", limit: 45
    t.integer "exType"
    t.string "BarCode", limit: 45
    t.bigint "cHolder"
    t.bigint "rPoint"
    t.integer "Magazzino", default: 0
    t.bigint "IdUtenteSpedizione", default: 0
    t.index ["cardholderID"], name: "cardholderID_UNIQUE", unique: true
    t.index ["idMastercard"], name: "idMastercard_UNIQUE", unique: true
    t.index ["pan"], name: "pan_UNIQUE", unique: true
  end

  create_table "MediaAnnuale", primary_key: "idMediaAnnuale", charset: "latin1", collation: "latin1_bin", force: :cascade do |t|
    t.bigint "idUtente", null: false
    t.string "pan", limit: 16, null: false
    t.integer "anno", null: false
    t.decimal "saldoMedio", precision: 10, scale: 2, null: false
    t.index ["idMediaAnnuale"], name: "idMediaAnnuale_UNIQUE", unique: true
  end

  create_table "MessaggiTask", primary_key: "idMessaggio", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idTask", null: false
    t.text "messaggio", null: false
    t.string "mittente", limit: 10, null: false
    t.string "tipoMessaggio", limit: 2, null: false
    t.string "allegato", limit: 45
    t.text "destinatario", null: false
    t.datetime "dataOra", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.text "destinatariConoscenza"
    t.index ["idMessaggio"], name: "idMessaggio_UNIQUE", unique: true
  end

  create_table "OTP", primary_key: "IdUtente", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "PassFrase", limit: 45
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "OperatoriUser", primary_key: "idOperatoreUser", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idUser", null: false
    t.string "EmailAccount", limit: 45
    t.string "usernameOperatore", limit: 45, null: false
    t.string "nomeOperatore", limit: 45, null: false
    t.string "email", limit: 45, null: false
    t.string "cellulare", limit: 45, null: false
    t.date "scadenza"
    t.string "pinOperatore", limit: 45, null: false
    t.string "tipoOperatore", limit: 45
    t.integer "attivo", limit: 1, default: 1, null: false
    t.index ["idOperatoreUser"], name: "idOperatoreUser_UNIQUE", unique: true
  end

  create_table "Personalizzazione", primary_key: "ID", id: :integer, charset: "latin1", comment: "rappresenta tutti i dettagli personalizzabili per gli elementi del point\nper nuovi dettagli è necessario aggiungere nuove colonne\nLe colonne Tasti rappresentano i colori dei tasti delle varie sezioni", force: :cascade do |t|
    t.string "Nome", limit: 45
    t.string "SfondoSezione", limit: 45
    t.string "UrlImmagini", limit: 45
    t.string "TastiRicaricheTelefoniche", limit: 45
    t.string "TastiProdottiPin", limit: 45
    t.string "TastiServizi", limit: 45
    t.string "TastiEditoria", limit: 45
    t.string "TastiMonetica", limit: 45
    t.string "TastiAccount", limit: 500
    t.string "TastiMondonline", limit: 45
    t.string "Header", limit: 500
    t.string "Footer", limit: 500
    t.index ["ID"], name: "ID_UNIQUE", unique: true
  end

  create_table "SepaCountries", primary_key: "IdCountry", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Country", limit: 45
    t.string "Bic", limit: 45
    t.string "IBan", limit: 45
    t.string "Currency", limit: 45
  end

  create_table "Sezioni", primary_key: "ID", id: :integer, charset: "latin1", comment: "contiene la suddivisione delle sezioni del point\nle personalizzazioni sono gestite via codice", force: :cascade do |t|
    t.string "Nome", limit: 45
    t.index ["ID"], name: "ID_UNIQUE", unique: true
  end

  create_table "SplitBonifico", primary_key: "idSplitBonifico", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Prodotto", limit: 145
    t.decimal "Importo", precision: 10, scale: 2
    t.string "Causale", limit: 245
    t.string "Banca", limit: 145
    t.string "Iban", limit: 45
    t.string "Bic", limit: 45
    t.string "Nominativo", limit: 245
    t.string "VsId", limit: 145
    t.bigint "IdServizio", default: 0
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "Stato", default: 0
    t.string "Username", limit: 45
  end

  create_table "TaskMessaggi", primary_key: "idTask", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "topic", limit: 45, null: false
    t.integer "stato", default: 0
    t.string "idHelpdesk", limit: 10, null: false
    t.string "idCreatore", limit: 10
    t.datetime "dataOraApertura"
    t.datetime "dataOraChiusura"
    t.integer "priorita", default: 1, null: false
    t.string "assegnato", limit: 155
    t.text "note", size: :long
    t.datetime "scadenzaTask"
    t.string "lettoDa"
    t.index ["idTask"], name: "idTask_UNIQUE", unique: true
  end

  create_table "TotParziali", primary_key: ["data", "idgruppo"], charset: "latin1", force: :cascade do |t|
    t.date "data", null: false
    t.string "Gruppo", limit: 50, default: "0.00", null: false
    t.decimal "Parziale", precision: 10, scale: 2, default: "0.0"
    t.integer "idgruppo", default: 0, null: false
  end

  create_table "UserBackOffice", primary_key: "ID", id: :integer, charset: "latin1", comment: "tabella utilizzata per l'identificazione dell'utente\nlistIdVendor contiene tutti i vendor che l'utente è abilitato a visualizzare e modificare, es(Vendor.id1,Vendor.id2, ... , Vendor.idN) \nTipo indica i permessi di quell'utente all'interno del BackOffice 0=superUser, 1=User, 2=Read only User\nsuperUser consente di vedere e modificare con accesso a tutte le reti\nUser consente di vedere e modificare con accesso solamente alle proprie reti, può creare User di Tipo 2 per le proprie reti, o parte di esse\nRead only User consente di visualizzare ma non di modificare con accesso solamente alle proprie reti", force: :cascade do |t|
    t.string "Username", limit: 45, null: false
    t.string "Password", limit: 45, null: false
    t.integer "Tipo", default: 2, null: false
    t.text "ListIdVendor", size: :long, null: false
    t.index ["ID"], name: "ID_UNIQUE", unique: true
    t.index ["Username"], name: "username_UNIQUE", unique: true
  end

  create_table "UtentiCbs", primary_key: "idUtenteCbs", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Nome", limit: 55
    t.string "Cognome", limit: 55
    t.string "Cellulare", limit: 45
    t.string "Email", limit: 65
    t.string "Camera", limit: 45
    t.string "Pan", limit: 20
    t.integer "Pin", unsigned: true
    t.bigint "IdPoint"
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "ValuteCrypto", primary_key: "idValutaCrypto", id: :integer, charset: "latin1", force: :cascade do |t|
    t.decimal "Eur", precision: 20, scale: 8
    t.datetime "Data"
    t.string "Crypto", limit: 45
  end

  create_table "abilitazioni_Broker", primary_key: "ID", id: :integer, charset: "latin1", comment: "associazione Broker-Vendor", force: :cascade do |t|
    t.integer "idUserBroker", null: false
    t.integer "Vendor", null: false
  end

  create_table "accessi", primary_key: "IdUtente", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.integer "Family"
    t.integer "Helpdesk", limit: 1, default: 0
    t.integer "Clienti", limit: 1, default: 0
    t.integer "Agenti", limit: 1, default: 0
    t.integer "Network", limit: 1, default: 0
    t.integer "Operazioni", limit: 1, default: 0
    t.integer "Finanziario", limit: 1, default: 0
    t.integer "Statistiche", limit: 1, default: 0
    t.integer "Statistiche2", limit: 1, default: 0
    t.integer "modificalistino", limit: 1, default: 0
    t.integer "StatisticheRete", limit: 1, default: 0
    t.integer "StatisticheFinanziario", limit: 1, default: 0
    t.integer "Trader", limit: 1, default: 0
    t.integer "Esterno", limit: 1, default: 0
    t.integer "Conti", limit: 1, default: 0
    t.integer "PFS", default: 0
    t.integer "Log", limit: 1, default: 0
    t.integer "CambioUsername", default: 0
    t.integer "Questionario", default: 0
    t.integer "AttivazioneAnagrafiche", default: 0
    t.integer "bitkash", default: 0
    t.integer "ModificaAnagrafica", default: 0
    t.integer "Archiviati", default: 0
    t.integer "BonificiUtenti", default: 0
    t.integer "SupMessaggi", default: 0
    t.integer "Calendar", default: 0
    t.integer "Segnalazioni", default: 0
    t.integer "Compliance", default: 0
    t.integer "Cbar", default: 0
    t.integer "Escalation", default: 0
    t.integer "Note", default: 1
    t.integer "MLRO", default: 0
  end

  create_table "aml_cronologia_questionario", primary_key: "idaml_cronologia_questionario", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "IdQuestionario"
    t.bigint "IdUtente"
    t.decimal "calc_risk_value", precision: 10, scale: 2
    t.decimal "risk_value", precision: 10, scale: 2
    t.datetime "datacompletamento"
    t.integer "stato"
    t.integer "checked", default: 0
    t.string "ipcall", limit: 45
    t.index ["IdUtente"], name: "idutente"
    t.index ["stato"], name: "stato"
  end

  create_table "aml_domande", primary_key: "IdDomanda", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "IdDependence"
    t.integer "IdQuestionario", null: false
    t.text "TestoDomanda", null: false
    t.text "TestoDomandaENG"
    t.text "TestoDomandaBG", collation: "utf8_general_ci"
    t.integer "TipoDomanda", limit: 1, null: false
    t.integer "NumeroOrdinamento", default: 0
    t.index ["IdQuestionario"], name: "IdCampagna_idx"
  end

  create_table "aml_economic_activity", primary_key: "idaml_economic_activity", id: :integer, charset: "latin1", force: :cascade do |t|
    t.text "type", size: :long
    t.decimal "risk_value", precision: 10, scale: 2
    t.integer "cod", default: 0
  end

  create_table "aml_nation_risk", primary_key: "idaml_nation_risk", id: :integer, charset: "latin1", force: :cascade do |t|
    t.text "name", size: :long
    t.integer "cod"
  end

  create_table "aml_possibili_risposte", primary_key: "IdPossibileRisposta", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "IdDomanda", null: false
    t.text "PossibileRisposta", size: :long, null: false
    t.text "PossibileRispostaENG", size: :long
    t.text "PossibileRispostaBG", size: :long, collation: "utf8mb4_general_ci"
    t.text "PossibileRispostaPFS", size: :long
    t.decimal "valoreRischio", precision: 10, scale: 2, null: false
    t.integer "jumpquestion", default: 0
  end

  create_table "aml_questionario", primary_key: ["IdQuestionario", "NomeQuestionario"], charset: "latin1", force: :cascade do |t|
    t.integer "IdQuestionario", null: false, auto_increment: true
    t.string "NomeQuestionario", limit: 100, null: false
    t.string "Vendor", limit: 15, null: false
    t.integer "StatoQuestionario", default: 0, null: false
    t.datetime "DataCreazione", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "Destinatario", comment: "2 = USER,3 = Business"
    t.datetime "DataAttivazione"
    t.index ["NomeQuestionario"], name: "NomeQuestionario_UNIQUE", unique: true
  end

  create_table "aml_risposte", primary_key: "IdRisposta", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente", null: false
    t.integer "IdQuestionario"
    t.integer "IdDomanda", null: false
    t.integer "IdPossibileRisposta"
    t.integer "TipoDomanda"
    t.text "Risposta", null: false, collation: "utf8mb4_general_ci"
    t.datetime "DataRisposta", default: -> { "CURRENT_TIMESTAMP" }
    t.float "ValoreRischio", limit: 53
    t.integer "IdCronologia"
    t.string "ipcall", limit: 50
    t.index ["IdDomanda"], name: "IdDomanda_idx"
  end

  create_table "aml_source_of_funds", primary_key: "idaml_source_of_funds", id: :integer, charset: "latin1", force: :cascade do |t|
    t.text "type", size: :long
    t.decimal "risk_value", precision: 10
    t.integer "cod"
  end

  create_table "anagbonifici", primary_key: "idanagbonifici", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idutente"
    t.string "beneficiario", limit: 245
    t.string "indirizzo", limit: 245
    t.string "citta", limit: 145
    t.string "bicswift", limit: 45
    t.string "iban", limit: 50
    t.string "banca", limit: 145
  end

  create_table "anagrafiche", primary_key: "IdUtente", charset: "utf8", force: :cascade do |t|
    t.string "CodSpinoff", limit: 5
    t.string "CodSpinoff2", limit: 5
    t.integer "Attivo"
    t.datetime "DataPassword"
    t.string "Username", limit: 100
    t.string "Password", limit: 100
    t.integer "Contratto", default: 0
    t.integer "Vendor", default: 0
    t.bigint "IdConcession", default: 0
    t.bigint "Agente"
    t.string "RagioneSociale", limit: 100
    t.string "CodicefiscaleAzienda", limit: 86
    t.string "Rea", limit: 50
    t.string "CivSedeLegale", limit: 20
    t.string "SedeLegale", limit: 100
    t.string "ComuneAzienda", limit: 100
    t.string "CapAzienda", limit: 18
    t.string "ProvinciaAzienda", limit: 2
    t.string "TelefonoAzienda", limit: 20
    t.string "FaxAzienda", limit: 20
    t.string "SitoAzienda", limit: 100
    t.string "EmailLegalerappresentante", limit: 100
    t.string "Nome", limit: 100
    t.string "Cognome", limit: 100
    t.string "Codicefiscale", limit: 26
    t.string "Sesso", limit: 1
    t.date "DataNascita"
    t.string "LuogoNascita", limit: 100
    t.string "ProvinciaNascita", limit: 2
    t.string "NazioneNascita", limit: 3
    t.string "Indirizzo", limit: 100
    t.string "Civico", limit: 55
    t.string "Citta", limit: 100
    t.string "CAP", limit: 18
    t.string "Provincia", limit: 2
    t.string "NazioneResidenza", limit: 3
    t.string "Telefono", limit: 20
    t.string "Fax", limit: 20
    t.string "Cellulare", limit: 20
    t.string "Email", limit: 50
    t.integer "IdTipo", default: 0
    t.integer "IdTipoDocumento"
    t.string "NumeroDocumento", limit: 20
    t.datetime "DataRilascio"
    t.datetime "DataScadenza"
    t.string "EnteRilascio", limit: 150
    t.string "AziendaRuolo", limit: 150
    t.date "DataCostituzioneSocieta"
    t.string "PartitaIva", limit: 86
    t.string "TipoAzienda", limit: 150
    t.string "FunzionarioResponsabile", limit: 100
    t.string "TerminiCondizioni", limit: 2
    t.string "Datiok", limit: 2
    t.integer "PrimaConnessione"
    t.datetime "Created", default: -> { "CURRENT_TIMESTAMP" }
    t.string "AttSvolte", limit: 250
    t.string "AttSec", limit: 250
    t.string "AltreAtt", limit: 250
    t.string "PacchettoPoint", limit: 20
    t.string "Insegna", limit: 100
    t.string "IndirizzoPoint", limit: 100
    t.string "CapPoint", limit: 18
    t.string "ComunePoint", limit: 100
    t.string "ProvinciaPoint", limit: 5
    t.string "NazionePoint", limit: 3
    t.string "ModPagamento", limit: 50
    t.text "Note", size: :long
    t.string "OkUIC", limit: 2, default: "0"
    t.string "OkAgente", limit: 2
    t.string "OkUffcontratti", limit: 2
    t.string "OkUffamm", limit: 2
    t.integer "OkMagazzino", default: 0
    t.integer "Avanzamento", default: 0
    t.string "ContoPoint", limit: 50
    t.string "ContoPoint2", limit: 50
    t.string "LastUpdate", limit: 10
    t.datetime "DataLastUpdate"
    t.integer "Livello", default: 0
    t.bigint "Padre", default: 0
    t.string "Autorizzazioni", limit: 20
    t.integer "InvioEmail"
    t.string "AutEmail", limit: 2
    t.string "SerialCog", limit: 6
    t.string "OpHelpdesk", limit: 5
    t.string "Toponimo", limit: 8
    t.datetime "DataAttivazione"
    t.integer "LinkDoc", limit: 1, default: 0
    t.integer "LinkCF", limit: 1, default: 0
    t.integer "LinkBill", limit: 1, default: 0
    t.integer "LinkContratto", limit: 1, default: 0
    t.integer "LinkVisura", limit: 1, default: 0
    t.integer "LinkPointAccount", limit: 1, default: 0
    t.integer "LinkDistributorAgreement", limit: 1, default: 0
    t.integer "LinkAltriDocumenti", limit: 1, default: 0
    t.integer "LinkSelfie", limit: 1, default: 0
    t.integer "LinkFacta", default: 0
    t.string "OkKyc", limit: 2
    t.integer "TipoKYC", default: 0
    t.datetime "DataOkKyc"
    t.string "DataNumOkKyc", limit: 8
    t.string "OpHelpDeskKyc", limit: 5
    t.bigint "IdLastUpdateKYC", default: 0
    t.datetime "DataLastUpdateKYC"
    t.string "EmailSollecito", limit: 150
    t.integer "NumeroEmailSollecito", default: 0
    t.text "Messaggio"
    t.datetime "DataUltimoSollecito"
    t.string "DateSollecito", limit: 250
    t.string "Codalt", limit: 6
    t.string "CAB", limit: 10
    t.string "Subconcession", limit: 7
    t.integer "IdToken", default: 0
    t.string "NazioneAzienda", limit: 3
    t.string "ContoTecnico", limit: 30
    t.string "Toponimo1", limit: 15
    t.string "Toponimo2", limit: 15
    t.string "WebPin", limit: 6
    t.integer "AbilitaWebPin", default: 0
    t.integer "UtilizziWebPin", default: 0
    t.integer "Supervisor", default: 0
    t.date "DataVerificaEmail"
    t.date "DataVerificaSms"
    t.string "TokenApp", limit: 45
    t.date "ScadenzaTokenApp"
    t.boolean "AbilitaTokenApp", default: true
    t.string "Cittadinanza", limit: 45
    t.string "Lingua", limit: 45
    t.string "VersioneAgreement", limit: 45
    t.integer "StatoAgreement"
    t.date "ScadenzaAgreement"
    t.date "DataAgreement"
    t.integer "LimiteMastercard", default: 1
    t.string "Provider", limit: 6, default: "COG"
    t.string "ProviderDefault", limit: 6, default: "COG"
    t.date "dataNominaPoint"
    t.string "linguaPergamena", limit: 45
    t.string "nazionePorting", limit: 45
    t.date "dataSendPergamena"
    t.decimal "base_risk", precision: 10, scale: 2, default: "5.0"
    t.integer "bonifico", default: 0
    t.decimal "base_risk_calc", precision: 10, scale: 2, default: "0.0"
    t.string "tipobusiness"
    t.string "organizzazioneazienda"
    t.integer "SubStato", default: 0
    t.string "TipoDocumentoEuropeo"
    t.string "NumeroDocumentoEuropeo"
    t.date "ScadenzaDocumentoEuropeo"
    t.date "Skipdatecompliance"
    t.date "Lastcheckcompliance"
    t.date "Nextcheckcompliance"
    t.date "LastRevision"
    t.date "NextRevision"
    t.date "DataArchiviazione"
    t.bigint "IdOpArchiviazione", default: 0
    t.string "classificazione", limit: 45, default: "ZZ"
    t.string "NationDocument", limit: 45
    t.integer "DisplayOnly", default: 0
    t.integer "Fatca", default: 0
    t.integer "OutsideMalta", default: 0
    t.integer "Pep", default: 0
    t.integer "ExPep", default: 0
    t.integer "Occasionale", default: 0
    t.index ["Agente"], name: "agente"
    t.index ["Attivo"], name: "stato"
    t.index ["Citta"], name: "idx_anagrafiche_Citta"
    t.index ["IdTipo"], name: "Tipo"
    t.index ["IdUtente"], name: "IdUtente_UNIQUE", unique: true
    t.index ["Provincia"], name: "provincia"
    t.index ["SubStato"], name: "substato"
    t.index ["TipoKYC"], name: "kyc"
    t.index ["Vendor"], name: "idx_anagrafiche_Vendor"
    t.index ["Vendor"], name: "vendor"
  end

  create_table "anagraficheUtenze", primary_key: ["idanagrafeUtenze", "codicefiscale"], charset: "latin1", force: :cascade do |t|
    t.integer "idanagrafeUtenze", null: false, auto_increment: true
    t.string "Nome", limit: 45
    t.string "Cognome", limit: 45
    t.string "datadinascita", limit: 45
    t.string "luogodinascita", limit: 45
    t.string "codicefiscale", limit: 45, null: false
    t.string "cellulare", limit: 45
    t.string "indirizzo", limit: 45
    t.string "cap", limit: 45
    t.string "citta", limit: 45
    t.string "provincia", limit: 45
    t.string "sesso", limit: 1
    t.date "lastLogin"
    t.index ["codicefiscale"], name: "codicefiscale_UNIQUE", unique: true
    t.index ["idanagrafeUtenze"], name: "idanagrafeUtenze_UNIQUE", unique: true
  end

  create_table "assegnatoken", primary_key: "idassegnatoken", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.bigint "idutente", default: 0
    t.string "utente", limit: 45
    t.string "numtessera", limit: 45
  end

  create_table "assegnovirtuale", primary_key: "IdTab", charset: "latin1", force: :cascade do |t|
    t.bigint "Idservizio"
    t.bigint "IdUtente"
    t.string "IdAssegno", limit: 45, null: false
    t.string "NomeEm", limit: 45
    t.string "CognomeEm", limit: 45
    t.string "NomeDest", limit: 145
    t.string "CognomeDest", limit: 45
    t.string "ContoAssegno", limit: 45
    t.decimal "Importo", precision: 10, scale: 2
    t.decimal "Fee", precision: 10, scale: 2
    t.string "ContoFee", limit: 45
    t.date "DataEmissione"
    t.string "ExternalId", limit: 45
    t.integer "MetodoIncasso", default: 0
    t.date "DataIncasso"
    t.integer "Stato", default: 0
    t.bigint "IdStorno", default: 0
    t.bigint "IdIncasso", default: 0
    t.index ["IdAssegno"], name: "IdAssegno_UNIQUE", unique: true
    t.index ["Idservizio"], name: "IdServizio"
  end

  create_table "bintype", primary_key: "idBinType", id: { type: :string, limit: 8, comment: "corrisponde al \"Firstbin\" della vecchia tabella \"BinType\"" }, charset: "latin1", force: :cascade do |t|
    t.integer "id", null: false, unsigned: true, auto_increment: true
    t.integer "tipoprodotto", null: false, comment: "corrisponde al campo \"Descrizione\" della vecchia tab \"BinType\""
    t.string "descrprod", limit: 60, default: "descrive il prodotto", comment: "corrisponde al vecchio campo \"Tipo\" della tabella BinType"
    t.string "mascheramento", limit: 8, comment: "coincide col campo \"mascheramento\" della vecchia tabella BinType"
    t.string "tiposervizio", limit: 45, comment: "coincide con l'anaologo campo della vecchia tabella BinType"
    t.string "subprodotto", limit: 5
    t.decimal "Giornaliero", precision: 10, scale: 2, default: "0.0"
    t.decimal "Settimanale", precision: 10, scale: 2, default: "0.0"
    t.decimal "Mensile", precision: 10, scale: 2, default: "0.0"
    t.decimal "Annuale", precision: 10, scale: 2, default: "0.0"
    t.decimal "Singola", precision: 10, scale: 2, default: "0.0"
    t.decimal "TurnOver", precision: 10, scale: 2, default: "0.0"
    t.decimal "Balance", precision: 10, scale: 2, default: "0.0"
    t.index ["id"], name: "id_UNIQUE", unique: true
    t.index ["tipoprodotto"], name: "tipoprodotto_UNIQUE", unique: true
  end

  create_table "blacklist", primary_key: "idblacklist", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Nome", limit: 45
    t.string "Cognome", limit: 45
    t.string "CodiceFiscale", limit: 45
    t.string "Email", limit: 45
    t.string "Telefono", limit: 45
  end

  create_table "bonifici", primary_key: "idbonifico", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio", null: false
    t.string "ordinante", limit: 150, null: false
    t.string "codicefiscale", limit: 45, null: false
    t.string "ibanOrdinante", limit: 45
    t.string "ibandest", limit: 50, null: false
    t.string "destinatario", limit: 150, null: false
    t.string "Paese", limit: 75, default: "\"\""
    t.string "dindirizzo", limit: 250, null: false
    t.string "dloc", limit: 150, null: false
    t.string "swift", limit: 45, default: "\"\""
    t.string "causale", limit: 350, default: "\""
    t.string "dfiliale", limit: 150, default: "\""
    t.string "family", limit: 10
    t.integer "giustificativo", default: 0
    t.bigint "idServExt", default: 0
    t.string "contofee", limit: 45, default: "0"
    t.string "feeOption", limit: 6, default: "0"
    t.bigint "Operatore", default: 0
    t.string "valuta", limit: 45
    t.decimal "conversione", precision: 10, scale: 2
    t.index ["giustificativo"], name: "giustificativo"
    t.index ["ibandest"], name: "ibandest"
    t.index ["idservizio"], name: "idservizio_UNIQUE", unique: true
  end

  create_table "bonificiprovider", primary_key: "idbonificiprovider", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Nome", limit: 145
    t.string "Iban", limit: 65
    t.string "Bic", limit: 45
    t.decimal "Importo", precision: 10, scale: 2
    t.string "Causale", limit: 145
    t.integer "stato", default: 0
    t.integer "IdFlusso"
  end

  create_table "cab", primary_key: ["IdCab", "Cab"], charset: "latin1", force: :cascade do |t|
    t.integer "IdCab", null: false, auto_increment: true
    t.string "Cab", limit: 45, null: false
    t.decimal "LimiteGG", precision: 10, scale: 2
    t.decimal "LimiteMM", precision: 10, scale: 2
    t.decimal "SaldoGG", precision: 10, scale: 2
    t.decimal "SaldoMM", precision: 10, scale: 2
    t.string "MasterAccount", limit: 45
    t.date "LastUpdate"
    t.index ["Cab"], name: "Cab_UNIQUE", unique: true
    t.index ["Cab"], name: "cab"
  end

  create_table "caratt_prodotti", primary_key: ["idprodotto", "feePeriod"], charset: "latin1", force: :cascade do |t|
    t.integer "idcaratt_prodotti", null: false, auto_increment: true
    t.integer "idprodotto", null: false
    t.string "descrsubprodotto", limit: 45
    t.integer "feePeriod", null: false
    t.decimal "ImportoAddebito", precision: 10, scale: 2
    t.decimal "LimiteTrans", precision: 10, scale: 2, comment: "Importo limite della transazione"
    t.decimal "LimiteDay", precision: 10, scale: 2
    t.decimal "LimiteMonth", precision: 10, scale: 2
    t.decimal "LimiteYear", precision: 10, scale: 2
    t.index ["feePeriod"], name: "fk_tipoaddebito_idx"
    t.index ["idcaratt_prodotti"], name: "idcaratt_prodotti_UNIQUE", unique: true
  end

  create_table "cards", primary_key: "idcard", charset: "latin1", force: :cascade do |t|
    t.string "codice_carta", limit: 45, null: false
    t.bigint "pin"
    t.string "mobile", limit: 45, null: false
    t.string "id_pos", limit: 45
    t.string "id_user", limit: 45
    t.bigint "transaction_id"
    t.datetime "creation_date", default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "update_date", default: -> { "CURRENT_TIMESTAMP" }
    t.string "cardscol", limit: 45
  end

  create_table "causali", primary_key: "idcausali", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "codice", null: false
    t.string "prodotto", limit: 45
    t.string "lingua", limit: 5, null: false
    t.string "causale1", limit: 150
    t.string "causale2", limit: 150
    t.index ["idcausali"], name: "idcausali_UNIQUE", unique: true
  end

  create_table "cdd_review", primary_key: "idcdd_review", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idUtente"
    t.integer "idoperator_start"
    t.integer "idoperator_end"
    t.date "start_review"
    t.date "end_review"
    t.integer "status", default: 1
    t.index ["idcdd_review"], name: "idcdd_review_UNIQUE", unique: true
  end

  create_table "checksaldi", primary_key: ["Data", "Provider"], charset: "latin1", force: :cascade do |t|
    t.datetime "Data", null: false
    t.string "Provider", limit: 45, null: false
    t.decimal "Saldo", precision: 10, scale: 2, default: "0.0"
  end

  create_table "classificazioni", primary_key: "idclassificazioni", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "sigla", limit: 2
    t.string "descrizione", limit: 155
  end

  create_table "codeservizio", primary_key: ["Code", "IdServizio"], charset: "latin1", force: :cascade do |t|
    t.integer "Code", null: false
    t.bigint "IdServizio", null: false
  end

  create_table "codici", primary_key: "idcodici", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "codicenazionale", limit: 45
    t.string "denominazione", limit: 150
    t.string "denominazioneEn", limit: 150
  end

  create_table "codicisconto", primary_key: "CodiceSconto", id: { type: :string, limit: 20 }, charset: "latin1", force: :cascade do |t|
    t.decimal "sconto", precision: 5, scale: 2
    t.date "Scadenza"
    t.bigint "IdServizio", default: 0
    t.integer "Stato", default: 0
  end

  create_table "codicitabelle", primary_key: "codtab", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "nometabella", limit: 45
  end

  create_table "compliance_check", primary_key: "idcompliance_check", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "IdUtente"
    t.string "result", limit: 2
    t.text "result_search", size: :long, collation: "utf8mb4_general_ci"
    t.datetime "dataeoraverifica", default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "datestartcheck"
    t.string "typecompliance", limit: 1, comment: "M = manula, A = automated"
    t.integer "od", default: 0
  end

  create_table "comuni", primary_key: "IdComune", id: :integer, default: nil, charset: "utf8", force: :cascade do |t|
    t.string "CCF", limit: 4, null: false, collation: "latin1_swedish_ci"
    t.string "Comune", limit: 200, null: false
    t.string "Provincia", limit: 2, null: false
    t.string "Regione", limit: 100, null: false
    t.string "NomeProvincia", limit: 145, null: false
    t.index ["Comune"], name: "comune"
    t.index ["Provincia"], name: "provincia"
  end

  create_table "concession", id: false, charset: "utf8", force: :cascade do |t|
    t.bigint "IdUtente", null: false
    t.string "IdConcession", limit: 50, null: false
    t.string "Username", limit: 100, null: false
    t.string "PASSWORD", limit: 150
    t.index ["IdUtente", "IdConcession"], name: "id_anagrafica", unique: true
  end

  create_table "conti", primary_key: "Pan", id: { type: :string, limit: 46, comment: "Identificativo numero di conto" }, charset: "latin1", comment: "Tabella che contiene i conti dei clienti", force: :cascade do |t|
    t.integer "idConti", null: false, comment: "Contatore", auto_increment: true
    t.bigint "IdUtente", null: false, comment: "Identificativo utente collegato alla tabella ANAGRAFICA"
    t.bigint "idpoint", default: 0, null: false
    t.string "IPan", limit: 16, default: "0000000000000000", null: false, comment: "Identificativo conto carta"
    t.string "alias", limit: 50
    t.decimal "Saldo", precision: 12, scale: 2, default: "0.0", null: false
    t.string "nazione", limit: 3, default: "ND"
    t.string "BinType", limit: 8
    t.integer "ProductState", default: 1, null: false, comment: "Stato dei prodotti (vecchio Service code)"
    t.integer "ProductType", null: false, comment: "Tipo prodotto"
    t.integer "family", default: 4, null: false, comment: "Tipo di conto (Tesoreria (TES)o Tecnico(TEC))"
    t.integer "subtypeprod"
    t.string "Valuta", limit: 6, default: "EUR", null: false, comment: "Tipo di moneta (collegato alla tab moneta)"
    t.datetime "Inserimento", default: -> { "CURRENT_TIMESTAMP" }, null: false, comment: "Data di inserimento conto"
    t.timestamp "Attivazione", default: -> { "CURRENT_TIMESTAMP" }, comment: "Data di attivazione conto"
    t.string "Webpin", limit: 6, default: "999999", null: false, comment: "Webpin generato dal cliente"
    t.datetime "scadwebpin", null: false
    t.datetime "lastMovimento", comment: "Data ed ora dell'ultimo addebito sul conto"
    t.integer "datanumerica", comment: "Data dell'ultimo addebito in conto in formato numerico unsigned", unsigned: true
    t.time "Hour", comment: "ora dell'ultimo addebito sul conto"
    t.string "ipDskUser", limit: 45, default: "nd"
    t.string "DeskUser", limit: 10, default: "nd", comment: "oepratore che interviene sulla tabella"
    t.datetime "lastUpdateuser", comment: "Data dell'ultimo intervento di un operatore"
    t.string "webpin2", limit: 6, default: "000000"
    t.date "scadenza_wp2"
    t.string "Nota1", default: "no note"
    t.string "Nota2", default: "no note"
    t.boolean "fido", default: false
    t.decimal "limite", precision: 10, scale: 2, default: "0.0"
    t.date "datascadenzaservizi"
    t.integer "AccessoConto", default: 0
    t.integer "StatoKyc", default: 0
    t.date "Scadenza"
    t.integer "Visualizza", default: 0
    t.integer "Preferito", default: 0
    t.index ["IPan"], name: "IPan"
    t.index ["IdUtente"], name: "IdUtente"
    t.index ["ProductState"], name: "fk_Conti_ProductState_idx"
    t.index ["ProductType"], name: "fk_conti_caratt_prodotti_idx"
    t.index ["Valuta"], name: "fk_Conti_valuta_idx"
    t.index ["family"], name: "fk_tipoconto_idx"
    t.index ["idConti"], name: "idConti_UNIQUE", unique: true
    t.index ["idpoint"], name: "IdPoint"
    t.index ["subtypeprod"], name: "fk_conti_subtype_idx"
  end

  create_table "contimandati", primary_key: "idcontimandati", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "NomeConto", limit: 150
    t.string "pan", limit: 45
    t.integer "IdTipoConto"
    t.index ["pan"], name: "pan"
  end

  create_table "contipoint", primary_key: "IdUtente", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "conto1", limit: 45
    t.string "conto2", limit: 45
    t.string "conto3", limit: 45
    t.string "conto4", limit: 45
    t.string "conto5", limit: 45
    t.string "LinkGateway", limit: 150
  end

  create_table "contratti", primary_key: "Vendor", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.text "Contratto", size: :long, collation: "utf8_general_ci"
    t.index ["Vendor"], name: "Vendor_UNIQUE", unique: true
  end

  create_table "department", primary_key: "iddepartment", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "departmentIT"
    t.string "departmentEN"
    t.string "members"
    t.integer "sorting"
    t.index ["iddepartment"], name: "iddepartment_UNIQUE", unique: true
  end

  create_table "descrizionifinancial", primary_key: "iddescrizionifinancial", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "tipo"
    t.text "descrizione", size: :long
    t.index ["tipo"], name: "tipo"
  end

  create_table "documenti", primary_key: ["IdUtente", "documento"], charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente", null: false
    t.string "documento", limit: 50, null: false
    t.string "file", limit: 150
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "easypay", primary_key: "idfastpay", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio", null: false
    t.string "destinatario", limit: 45, default: "nd"
    t.string "conto", limit: 45, default: "nd"
    t.string "contocrip", limit: 45, default: "nd"
    t.string "pan", limit: 45, default: "nd"
    t.string "idutente", limit: 45, default: "nd"
    t.string "webpin", limit: 45, default: "nd"
    t.string "concessionario", limit: 45, default: "nd"
    t.string "codicefiscale", limit: 45, default: "nd"
    t.string "ragsociale", limit: 45
    t.string "nota", limit: 45, default: "nd"
    t.index ["idservizio"], name: "idservizio_UNIQUE", unique: true
  end

  create_table "easypaycode", primary_key: "ideasypaycode", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Codeeasypay", limit: 4
    t.bigint "IdPoint"
    t.string "Ccpoint", limit: 16
  end

  create_table "email", primary_key: "ID", id: :integer, default: nil, charset: "utf8", force: :cascade do |t|
    t.string "Email", limit: 2630
    t.string "Descrizione", limit: 32
    t.integer "Rete"
    t.string "NomeRete", limit: 14
  end

  create_table "emoneycards", primary_key: "idcard", charset: "latin1", force: :cascade do |t|
    t.integer "extype"
    t.string "cardbin", limit: 45
    t.string "ipan", limit: 45
    t.string "deliveredat", limit: 45
    t.string "deliveredto", limit: 45
    t.string "deliveredatnum", limit: 45
    t.boolean "created"
    t.string "enddate", limit: 45
    t.boolean "emessa"
    t.integer "attiva"
    t.string "generated", limit: 45
    t.string "type", limit: 45
    t.string "cholder", limit: 45
    t.string "rpoint", limit: 45
    t.integer "IdTrader", default: 0
    t.index ["cardbin"], name: "cardbin_UNIQUE", unique: true
  end

  create_table "errori", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "iderrore"
    t.string "lingua", limit: 4
    t.string "descrizione", limit: 150, default: "\"\""
    t.string "descrInterna", limit: 150, default: "\"\""
  end

  create_table "escalation", primary_key: "idescalation", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "Tipo"
    t.string "Oggetto", limit: 245
    t.text "Note", size: :long
    t.integer "Stato"
    t.bigint "IdUtente", default: 0
    t.string "Categoria", limit: 45
    t.bigint "IdServizio", default: 0
    t.integer "IdMandato", default: 0
    t.datetime "DataApertura"
    t.datetime "DataChiusura"
    t.bigint "OperatoreApertura", default: 0
    t.bigint "OperatoreChiusura", default: 0
    t.index ["IdMandato"], name: "mandati"
    t.index ["IdServizio"], name: "servizi"
    t.index ["IdUtente"], name: "utente"
    t.index ["Stato"], name: "stato"
  end

  create_table "eventievo", primary_key: "ideventiEVO", charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.string "destinatario", limit: 150
    t.string "evento", limit: 250
    t.integer "numBiglietti"
    t.text "Partecipanti"
    t.decimal "importoevo", precision: 10, scale: 2, default: "0.0"
    t.index ["idservizio"], name: "idservizio_UNIQUE", unique: true
  end

  create_table "eventscalendar", primary_key: "idEvent", id: :integer, charset: "latin1", force: :cascade do |t|
    t.datetime "dateEvent_ext"
    t.date "dateEvent_short", comment: "Mi occorre per il raggruppamento delle date eventi"
    t.integer "status", default: 1
    t.string "title", limit: 150
    t.text "description", size: :long
    t.integer "creator"
    t.string "destinatary", limit: 100
    t.text "notepostpone", size: :long
    t.string "ideventfather", limit: 45
    t.integer "numberofadviseexpire", default: 0
    t.index ["destinatary"], name: "destinatari"
  end

  create_table "extrafatture", primary_key: "idextrafatture", id: :integer, charset: "utf8", force: :cascade do |t|
    t.integer "numerofattura"
    t.integer "anno"
    t.string "point", limit: 150
  end

  create_table "fastcash", primary_key: "idfastcash", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.string "contomerchant", limit: 45
    t.string "numcarta", limit: 20
    t.string "utenza", limit: 45
    t.string "nomecognome", limit: 45
    t.string "codicefiscale", limit: 45, default: "nd"
    t.string "username", limit: 45
    t.string "cro", limit: 45, default: "nd"
    t.string "conc", limit: 45, default: "nd"
    t.string "idbook", limit: 45, default: "nd"
    t.string "sitecode", limit: 45, default: "nd"
    t.string "idpoint", limit: 45
    t.string "logo", limit: 45
    t.string "codfirma", limit: 45, default: "0"
    t.string "codverifica", limit: 45, default: "0"
  end

  create_table "fastpay", primary_key: "idfastpay", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.string "numcarta", limit: 20
    t.string "utenza", limit: 45
    t.string "nomecognome", limit: 45
    t.string "codicefiscale", limit: 45, default: "nd"
    t.string "username", limit: 45
    t.string "cro", limit: 45, default: "nd"
    t.string "conc", limit: 45, default: "nd"
    t.string "idbook", limit: 45, default: "nd"
    t.string "sitecode", limit: 45, default: "nd"
    t.string "idpoint", limit: 45
    t.string "contodest", limit: 45
    t.string "logo", limit: 45
    t.index ["idservizio"], name: "idservizio"
  end

  create_table "fatture", primary_key: "idFatture", id: :integer, charset: "utf8", force: :cascade do |t|
    t.string "IdPoint", limit: 45
    t.string "NumeroFattura", limit: 45
    t.string "Periodo", limit: 45
    t.decimal "F74", precision: 10, scale: 2
    t.decimal "N15", precision: 10, scale: 2
    t.decimal "E10", precision: 10, scale: 2
    t.decimal "I21", precision: 10, scale: 2
    t.decimal "IVA21", precision: 10, scale: 2
    t.decimal "Totale", precision: 10, scale: 2
    t.date "DataFattura"
    t.string "DataFatturaTesto", limit: 45
    t.timestamp "DataCreazione"
    t.string "Emessa", limit: 2
    t.string "AutoFattura", limit: 2
    t.text "fattura", size: :long
  end

  create_table "financialbuy", primary_key: "idfinancialbuy", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.string "ragionesociale", limit: 400
    t.string "codicefiscale", limit: 20
    t.string "prodotto"
    t.text "descrizione"
    t.string "richiedente", limit: 400
    t.string "codfiscrichiedente", limit: 20
    t.decimal "costo", precision: 10, scale: 2
    t.text "note", size: :long
  end

  create_table "financialservices", primary_key: "idfinancialservices", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "tipo"
    t.string "prodotto", limit: 400
    t.decimal "prezzo", precision: 10, scale: 2
    t.integer "stato"
    t.string "esempio", limit: 200
    t.integer "visualizza", limit: 1, default: 1
    t.index ["tipo"], name: "tipo"
  end

  create_table "firmecontratto", primary_key: "idfirmecontratti", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "IdUtente"
    t.integer "firmaOtp"
    t.datetime "dataFirma", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "CheckOTP", default: 0
    t.string "verAgree", limit: 45
    t.string "UUID", limit: 145
    t.string "Cellulare", limit: 45
    t.string "Email", limit: 145
    t.string "FirmaEmail", limit: 45
    t.datetime "DataEmail"
    t.integer "CheckEmail", default: 0
  end

  create_table "flussi", primary_key: "idflussi", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "numtask", null: false
    t.decimal "totamnt", precision: 10, scale: 2, null: false
    t.date "dataflusso"
    t.datetime "datavalidazione"
    t.string "fileXML", limit: 3, default: "\"\""
    t.integer "operatore", default: 0
  end

  create_table "flusso_servizi", primary_key: ["idservizio", "idflusso"], charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio", null: false
    t.bigint "idflusso", null: false
    t.date "dataflusso", null: false
    t.integer "esito", default: 0
    t.string "Note", default: "vuoto"
    t.decimal "importo", precision: 10, scale: 2, default: "0.0"
  end

  create_table "formproduct", primary_key: "idservizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "nome", limit: 100
    t.string "cognome", limit: 100
    t.string "datadinascita", limit: 15
    t.string "email", limit: 100
    t.string "cellulare", limit: 45
    t.string "codfisciva", limit: 100
    t.string "targaveicolo", limit: 100
    t.integer "idtipo_formproduct"
  end

  create_table "giftlamda", primary_key: "IDServizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "OrderID", limit: 45
    t.string "Card", limit: 45
    t.integer "ExpDate"
    t.integer "Cvc2"
    t.string "Currency", limit: 45
  end

  create_table "giftpinservice", primary_key: "idservizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "IdUtente", limit: 45, default: "0"
    t.string "numerotelefono", limit: 45
    t.string "optelefonico", limit: 45
    t.string "action", limit: 45
    t.string "tipoopcog", limit: 45
    t.string "crocog", limit: 245, default: "vuoto"
    t.string "seriale", limit: 45, default: "vuoto"
    t.string "scadenza", limit: 45, default: "vuoto"
    t.string "pin", limit: 45, default: "vuoto"
    t.string "rrn", limit: 45, default: "vuoto"
  end

  create_table "gruppi", primary_key: "idgruppo", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "nomegruppo"
    t.integer "tabella"
    t.integer "iva"
    t.string "desiva"
    t.string "calcolo", limit: 45
    t.string "codiva", limit: 45
    t.integer "contospinof"
    t.integer "codcausale"
    t.string "tipoconto", limit: 45
    t.decimal "base_risk", precision: 10, scale: 2, default: "1.01"
  end

  create_table "header", primary_key: "IdHeader", id: { type: :integer, unsigned: true, default: nil }, charset: "latin1", force: :cascade do |t|
    t.string "Titolo", limit: 250
    t.text "Contenuto", size: :long, collation: "utf8_general_ci"
  end

  create_table "iban", primary_key: ["IdUtente", "Iban", "Conto"], charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente", null: false
    t.string "Iban", limit: 45, default: "", null: false
    t.string "Conto", limit: 45, default: "", null: false
    t.integer "Tipo", default: 0
    t.integer "C", default: 1
    t.index ["Conto"], name: "conto"
    t.index ["Iban"], name: "iban"
  end

  create_table "impbollo", primary_key: "idservizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "categoria", limit: 45
    t.string "eseguito", limit: 45
    t.string "regionecompetenza", limit: 45
    t.string "riduzione", limit: 45
    t.string "scadenza", limit: 25
    t.integer "mesivalidita"
    t.string "targa", limit: 45
    t.string "tassa", limit: 45
    t.decimal "sanzioni", precision: 10, scale: 2
    t.decimal "interessi", precision: 10, scale: 2
    t.decimal "totale", precision: 10, scale: 2
    t.string "cognomenome", limit: 150
    t.string "codicefiscale", limit: 20
    t.string "via", limit: 150
    t.string "cap", limit: 45
    t.string "localita", limit: 150
    t.string "provincia", limit: 45
    t.string "telefono", limit: 45
  end

  create_table "importiban", primary_key: "IdMovimentoTecnico", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "NomeFile", limit: 45
    t.string "MsgID", limit: 45
    t.string "Data", limit: 45
    t.string "DocId", limit: 45
    t.string "InstrId", limit: 45
    t.string "EndToEndId", limit: 45, collation: "utf8mb4_general_ci"
    t.string "TxId", limit: 45
    t.decimal "Amount", precision: 10, scale: 2
    t.string "ChrgBr", limit: 45
    t.string "NomeDebitore", limit: 145, collation: "utf8mb4_general_ci"
    t.string "NazioneDebitore", limit: 45
    t.string "IndirizzoDebitore", limit: 145, collation: "utf8mb4_general_ci"
    t.string "IndirizzoDebitore2", limit: 145, collation: "utf8mb4_general_ci"
    t.string "IbanDebitore", limit: 45, collation: "utf8mb4_general_ci"
    t.string "BicDebitore", limit: 45
    t.string "BicCreditore", limit: 45
    t.string "NomeCreditore", limit: 145
    t.string "NazioneCreditore", limit: 45
    t.string "IndirizzoCreditore", limit: 145
    t.string "IndirizzoCreditore2", limit: 145
    t.string "IbanCreditore", limit: 45
    t.string "Causale"
    t.bigint "IdMovimentoValidazione"
    t.integer "CheckTransaction", default: 0
    t.index ["IdMovimentoValidazione"], name: "idvalidazione"
  end

  create_table "incassoAssegno", primary_key: "idincassoAssegno", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio", null: false
    t.string "idAssegno", limit: 45
    t.string "Nome", limit: 145
    t.string "Cognome", limit: 45
    t.string "codicefiscale", limit: 45
    t.string "metodoIncasso", limit: 50
    t.string "numeroCartaConto", limit: 45
    t.string "iban", limit: 45
    t.integer "stato"
    t.decimal "feeIncasso", precision: 10, scale: 2
    t.decimal "importo", precision: 10, scale: 2
    t.date "dataEmissione"
    t.datetime "dataIncasso", default: -> { "CURRENT_TIMESTAMP" }
    t.string "causale", limit: 100
    t.index ["idincassoAssegno"], name: "idincassoAssegno_UNIQUE", unique: true
    t.index ["idservizio"], name: "idservizio_UNIQUE", unique: true
  end

  create_table "incomingfund", primary_key: "IdServizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.bigint "IdMandato"
  end

  create_table "internal_report", primary_key: "idReport", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idEscalation"
    t.integer "idOperator"
    t.integer "idUser"
    t.datetime "dOr", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "idCloser", default: 0
    t.datetime "dateClose"
    t.integer "status", default: 1
    t.string "noRp"
    t.string "ceMail"
    t.string "prevIR", limit: 45
    t.string "suspectedTerrorist", limit: 155
    t.string "knowPep", limit: 45
    t.string "pmlftr", limit: 45
    t.text "typeIR", size: :long
    t.string "mlft", limit: 45
    t.text "suspiciousDetails", size: :long
    t.string "title", limit: 45
    t.string "dOb", limit: 45
    t.string "firstName", limit: 155
    t.string "middleName", limit: 155
    t.string "lastName", limit: 155
    t.string "coB", limit: 45
    t.string "nationality", limit: 45
    t.text "documentInfo", size: :long
    t.text "residentialAddress", size: :long
    t.string "countryResidence", limit: 155
    t.string "knownOccupation", limit: 155
    t.string "ddlTts", limit: 45
    t.string "ddlPep", limit: 45
    t.string "ddlLsl", limit: 45
    t.text "webLink", size: :long
    t.string "ddlCriminalDettails", limit: 45
    t.text "criminalDettails", size: :long
    t.string "nameLegal", limit: 45
    t.string "typeCompany", limit: 45
    t.datetime "dateInc"
    t.string "regNumber", limit: 45
    t.string "regOffice", limit: 45
    t.string "countryReg", limit: 45
    t.string "natureBusiness", limit: 45
    t.string "ddlCriminalInv", limit: 45
    t.text "CriminalInv", size: :long
    t.string "ddlLegalWebLink", limit: 45
    t.text "legalWebLink", size: :long
    t.text "ubo", size: :long
    t.string "nameSubject", limit: 45
    t.string "service", limit: 45
    t.string "statusBusiness", limit: 65
    t.datetime "deBr"
    t.datetime "dbRd"
    t.string "npH", limit: 45
    t.string "pt", limit: 45
    t.string "pnN", limit: 45
    t.string "ddlCurrency", limit: 155
    t.string "balance", limit: 45
    t.datetime "d_O"
    t.datetime "dC"
    t.datetime "dSb"
    t.text "ac", size: :long
    t.datetime "fDate"
    t.string "amount", limit: 45
    t.string "ddlFCurrency", limit: 45
    t.string "rblPt", limit: 45
    t.string "cra", limit: 45
    t.string "ibanR", limit: 50
    t.string "nR", limit: 45
    t.string "cba", limit: 45
    t.string "ibanB", limit: 50
    t.string "nb", limit: 45
    t.string "employeeSub", limit: 45
    t.string "jt", limit: 45
    t.string "cfn", limit: 45
    t.string "tfn", limit: 45
    t.datetime "diRr"
    t.string "rblwsTr", limit: 45
    t.string "rblastr", limit: 45
    t.text "wd", size: :long
    t.string "fn", limit: 45
    t.datetime "dateMlro"
    t.datetime "dateSigned"
  end

  create_table "intrapay", primary_key: "idintrapay", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.string "NomeProd", limit: 45
    t.string "ordinante", limit: 145
    t.string "causale", limit: 145
    t.string "destinatario", limit: 145
    t.string "codicefiscale", limit: 45
    t.string "ragionesociale", limit: 145
    t.index ["idservizio"], name: "idservizio"
  end

  create_table "kyc", primary_key: "idkyc", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "descrizione", limit: 150
  end

  create_table "lamda", primary_key: "idutente", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.bigint "ClientId"
  end

  create_table "limitiProvider", primary_key: "IdLimitiProvider", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Provider", limit: 50, default: "0.00"
    t.decimal "Limite", precision: 10, scale: 2, default: "0.0"
    t.integer "IdGruppo", default: 0
  end

  create_table "limitigiornalieri", primary_key: "idlimiti", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idgruppo"
    t.string "gruppo", limit: 50
    t.decimal "limite", precision: 10, scale: 2
  end

  create_table "list_verify_account_business", primary_key: "idvau", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "active", default: 0
    t.integer "idoperator"
    t.integer "iduser"
    t.text "date_of_examination"
    t.integer "proof_of_identity"
    t.integer "selfie"
    t.integer "proof_of_residence"
    t.integer "source_of_wealth"
    t.integer "facta_from"
    t.integer "police_conduct"
    t.integer "bank_reference_letter"
    t.integer "agreement_signed"
    t.integer "last_tax_declaration"
    t.text "occupation"
    t.integer "links_founded"
    t.text "specify_links_found"
    t.integer "links_founded_STR"
    t.text "specify_links_found_STR"
    t.text "compliance_check_done_on"
    t.integer "ubo"
    t.integer "shareholder", default: 0
    t.integer "legal_rapresentavive", default: 0
    t.integer "pep"
    t.integer "ex_pep"
    t.integer "relative_pep"
    t.integer "associates_to_pep"
    t.integer "watchlist"
    t.integer "sanction_list"
    t.integer "adverse_media"
    t.text "specify_adverse_media"
    t.integer "business_relationship_with_high_risk_countries"
    t.text "specify_country_relationship"
    t.integer "behavior_of_the_client"
    t.text "note"
    t.text "subject_evaluated", size: :long
    t.integer "approval_MLRO", default: 0
    t.integer "articles_of_association", default: 0, comment: "1= Positive\n20 On hold"
    t.integer "memorandum_of_association", default: 0
    t.integer "excerpt_from_ROC", default: 0
    t.integer "certificate_of_incorporation", default: 0
    t.integer "vat_certificate", default: 0
    t.integer "last_financial_statment", default: 0
    t.integer "organizational_chart"
    t.integer "ubo_declaration"
    t.integer "third_parties_agreement"
    t.integer "trust_deed"
    t.integer "license"
    t.integer "shareholders_register"
    t.integer "directors_register"
    t.integer "tax_number"
    t.integer "last_tax_return"
    t.integer "wolfsberg_questionnarie"
    t.integer "list_of_client_and_suppliers"
    t.integer "policy_and_manual_AML"
    t.integer "minutes_of_directors_appointment"
    t.text "specify_further_document_requisted", size: :long
    t.text "specify_reason", size: :long
    t.text "principal_object", size: :long
    t.text "other_object", size: :long
    t.text "name_surname", size: :long
    t.text "how_find_Ubo", size: :long
    t.integer "residence_high_risk", default: 0
    t.text "specify_residence", size: :long
    t.text "negative_elements", size: :long
    t.text "positive_elements", size: :long
    t.text "notes", size: :long
    t.integer "cra"
    t.text "how_do_assign_level_risk", size: :long
    t.text "how_evaluete_customer_behavior", size: :long
  end

  create_table "list_verify_account_business_doc", primary_key: "idList", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idoperator"
    t.integer "active", default: 0
    t.integer "iduser"
    t.text "date_of_examination"
    t.datetime "date_of_change", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "proof_of_identity"
    t.integer "selfie"
    t.integer "proof_of_residence"
    t.integer "source_of_wealth"
    t.integer "facta_from"
    t.integer "police_conduct"
    t.integer "bank_reference_letter"
    t.integer "agreement_signed"
    t.integer "last_tax_declaration"
    t.text "occupation"
    t.integer "links_founded"
    t.text "specify_links_found"
    t.integer "links_founded_STR"
    t.text "specify_links_found_STR"
    t.integer "articles_of_association", default: 0, comment: "1= Positive\\n20 On hold"
    t.integer "memorandum_of_association", default: 0
    t.integer "excerpt_from_ROC", default: 0
    t.integer "certificate_of_incorporation", default: 0
    t.integer "vat_certificate", default: 0
    t.integer "last_financial_statment", default: 0
    t.integer "organizational_chart"
    t.integer "ubo_declaration"
    t.integer "third_parties_agreement"
    t.integer "trust_deed"
    t.integer "license"
    t.integer "shareholders_register"
    t.integer "directors_register"
    t.integer "tax_number"
    t.integer "last_tax_return"
    t.integer "wolfsberg_questionnarie"
    t.integer "list_of_client_and_suppliers"
    t.integer "policy_and_manual_AML"
    t.integer "minutes_of_directors_appointment"
    t.text "specify_further_document_requisted", size: :long
    t.text "specify_reason", size: :long
    t.index ["idList"], name: "idList_UNIQUE", unique: true
  end

  create_table "list_verify_account_user", primary_key: "idvau", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "active", default: 0
    t.integer "idoperator"
    t.integer "iduser"
    t.datetime "date_of_examination"
    t.integer "proof_of_identity", default: 0, comment: "1= Positive\\\\n2= On hold"
    t.integer "selfie", default: 0, comment: "1=positive\\n2=On hold"
    t.integer "proof_of_residence", default: 0
    t.integer "source_of_wealth", default: 0
    t.integer "facta_from", default: 0
    t.integer "police_conduct", default: 0
    t.integer "bank_reference_letter", default: 0
    t.integer "agreement_signed", default: 0
    t.integer "last_tax_declaration"
    t.text "occupation", size: :long
    t.integer "links_founded", default: 0, comment: "10 Yes\\n2=No"
    t.text "specify_links_found", size: :long
    t.integer "links_founded_STR", default: 0
    t.text "specify_links_found_STR", size: :long
    t.text "compliance_check_done_on", size: :long
    t.integer "ubo"
    t.integer "shareholder", default: 0
    t.integer "legal_rapresentative", default: 0
    t.integer "pep", comment: "1= yes\n2= no"
    t.integer "ex_pep", default: 0
    t.integer "relative_pep", default: 0
    t.integer "associates_to_pep", default: 0
    t.integer "watchlist", default: 0
    t.integer "sanction_list", default: 0
    t.integer "adverse_media", default: 0
    t.text "specify_adverse_media", size: :long
    t.integer "business_relationship_with_high_risk_countries", default: 0
    t.text "specify_country_relationship", size: :long
    t.integer "behavior_of_the_client", default: 0, comment: "1 Disappointing\\n2\\n3\\n4\\n5 Exeptional"
    t.text "note", size: :long
    t.datetime "date_of_change"
    t.integer "cra"
    t.text "how_do_assign_level_risk"
    t.text "how_evaluete_customer_behavior"
  end

  create_table "list_verify_account_user_doc", primary_key: "idvau", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "active", default: 0
    t.integer "idoperator"
    t.integer "iduser"
    t.datetime "date_of_examination"
    t.datetime "date_of_change", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "proof_of_identity", default: 0, comment: "1= Positive\\\\\\\\n2= On hold"
    t.integer "selfie", default: 0, comment: "1=positive\\\\n2=On hold"
    t.integer "proof_of_residence", default: 0
    t.integer "source_of_wealth", default: 0
    t.integer "facta_from", default: 0
    t.integer "police_conduct", default: 0
    t.integer "bank_reference_letter", default: 0
    t.integer "agreement_signed", default: 0
    t.integer "last_tax_declaration"
  end

  create_table "logKycnexModClick", primary_key: "idlogKycnexModClick", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idUtente"
    t.integer "idOperatore"
    t.datetime "dataclick", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "logaccessi", primary_key: "IdLogAccessi", charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente"
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
    t.string "Ip", limit: 45
  end

  create_table "logasap", primary_key: "idlogasap", id: :integer, charset: "utf8", force: :cascade do |t|
    t.string "card", limit: 45
    t.text "chiamata"
    t.text "risposta", size: :long
    t.datetime "data", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "loglamda", primary_key: "idlogLamda", charset: "latin1", force: :cascade do |t|
    t.datetime "data", default: -> { "CURRENT_TIMESTAMP" }
    t.text "xmlin", size: :long
    t.text "xmlout", size: :long
    t.string "ip", limit: 45
  end

  create_table "logtable", primary_key: "idlogtable", id: :integer, charset: "latin1", force: :cascade do |t|
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
    t.string "ipchiamante", limit: 45
    t.string "transcode", limit: 45
    t.text "xmlin"
    t.text "xmlout", size: :long
  end

  create_table "logtoken", primary_key: "idlogtoken", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "token"
    t.integer "numerotoken"
    t.datetime "data", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "idtransazione"
  end

  create_table "logverifiche", primary_key: "idlogverifiche", id: :integer, charset: "utf8", force: :cascade do |t|
    t.string "numerotelefono", limit: 45
    t.string "IdTransazione", limit: 45
    t.text "strsql", size: :long
  end

  create_table "mandati", primary_key: "IdMandato", id: :integer, charset: "latin1", force: :cascade do |t|
    t.date "Data"
    t.string "Tipo", limit: 45
    t.decimal "Importo", precision: 12, scale: 2, default: "0.0"
    t.bigint "Beneficiario"
    t.string "ContoBeneficiario", limit: 45, default: "0"
    t.text "Ordinante"
    t.string "ContoRiferimento", limit: 45
    t.string "Note", limit: 250
    t.string "Stato", limit: 45
    t.integer "Operatore", default: 0
    t.bigint "IdMovimentoTecnico"
    t.bigint "IdMovimentoValidazione", default: 0
    t.integer "Intestatario", default: 0
    t.integer "Passivi", default: 0
    t.integer "Blocco", default: 0
    t.string "Iban", limit: 45
    t.index ["Beneficiario"], name: "Beneficiario"
    t.index ["ContoRiferimento"], name: "Contoriferimento"
    t.index ["IdMovimentoTecnico"], name: "movTecnico"
    t.index ["IdMovimentoValidazione"], name: "validazione"
  end

  create_table "messaggi", primary_key: "idmessaggi", charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.bigint "da"
    t.string "oggetto", limit: 155, collation: "latin1_swedish_ci"
    t.datetime "data", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.text "corpo", collation: "utf8mb4_general_ci"
    t.integer "stato", default: 0
    t.bigint "destinatario"
    t.datetime "letto"
    t.integer "attivo", default: 1
    t.bigint "codmess"
    t.text "operatore", collation: "latin1_swedish_ci"
    t.bigint "assegnato", default: 0
    t.string "note", limit: 1024, collation: "latin1_swedish_ci"
    t.datetime "DataGestione"
    t.index ["assegnato"], name: "assegnati"
    t.index ["attivo"], name: "attivi"
    t.index ["codmess"], name: "idx_messaggi_codmess"
    t.index ["da"], name: "mittente"
    t.index ["destinatario"], name: "destinatario"
  end

  create_table "messaggipredefiniti", primary_key: "IdMessaggio", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Nome", limit: 145
    t.text "Testo"
  end

  create_table "movimenticonti", primary_key: "idMovimentiConti", charset: "latin1", force: :cascade do |t|
    t.bigint "idtransazione"
    t.integer "Point", null: false, comment: "Identifica l'utente = idutente"
    t.string "ipPoint", limit: 15, null: false, comment: "Indirizzo del cliente chiamante"
    t.string "TipoTransazione", limit: 1, null: false, comment: "Indica se il movimento è stato richiesto tramite IPAN o PAN"
    t.string "numeroConto", limit: 16, null: false, comment: "riferimento pan o ipan"
    t.string "contodiprovenienza", limit: 16
    t.string "contodestinazione", limit: 16
    t.datetime "dataMovimento", null: false, comment: "data ed ora del movimento"
    t.integer "datanumerica", unsigned: true
    t.decimal "Dare", precision: 10, scale: 2, default: "0.0", null: false, unsigned: true
    t.decimal "Avere", precision: 10, scale: 2, default: "0.0", null: false, unsigned: true
    t.decimal "Importo", precision: 10, scale: 2, default: "0.0", null: false
    t.string "Valuta", limit: 6, null: false
    t.decimal "SaldoProg", precision: 12, scale: 2, default: "0.0", null: false, comment: "Saldo aggiornato con l'ultimo movimento andato a buon fine"
    t.string "idCausale", limit: 45, comment: "Causale interna"
    t.text "Causale", comment: "Causale del cliente del movimento "
    t.string "Cro", limit: 45
    t.bigint "IdMandato", default: 0
    t.index ["Avere"], name: "Avere"
    t.index ["Dare"], name: "Dare"
    t.index ["Point"], name: "fk_point_idx"
    t.index ["SaldoProg"], name: "SaldoProg"
    t.index ["TipoTransazione"], name: "fk_tipotransazione"
    t.index ["dataMovimento"], name: "data"
    t.index ["idtransazione"], name: "fk_Idtransazione_idx"
    t.index ["numeroConto"], name: "fk_numeroconto_idx"
  end

  create_table "nazioniEu", primary_key: "Nazione", id: { type: :string, limit: 100 }, charset: "latin1", force: :cascade do |t|
    t.string "iso2", limit: 45
    t.string "iso3", limit: 45
  end

  create_table "nazioniiso", primary_key: "Nazione", id: { type: :string, limit: 100 }, charset: "latin1", force: :cascade do |t|
    t.string "ISO2", limit: 2, null: false
    t.string "ISO3", limit: 3, null: false
    t.string "NazioneEn", limit: 150
  end

  create_table "nazioniisoextrasepa", primary_key: "Nazione", id: { type: :string, limit: 100 }, charset: "latin1", force: :cascade do |t|
    t.string "ISO2", limit: 2, null: false
    t.string "ISO3", limit: 3, null: false
    t.string "NazioneEn", limit: 150
    t.integer "Embargo", default: 0
  end

  create_table "newsskin", primary_key: "idSkin", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "idmessaggio", limit: 150
    t.integer "data"
    t.text "messaggio", size: :long
    t.string "destvendor", limit: 45
    t.boolean "attivo", default: false
    t.integer "Scadenza", default: 1
    t.bigint "OpHelpDesk"
    t.text "messaggio_en", size: :long
    t.text "messaggio_es", size: :long
    t.datetime "DateIn"
    t.datetime "DateOut"
  end

  create_table "newsskin_en", primary_key: "idSkin", id: :integer, default: nil, charset: "utf8", force: :cascade do |t|
    t.string "idmessaggio", limit: 150
    t.integer "data"
    t.text "messaggio", size: :long
    t.string "destvendor", limit: 45
    t.boolean "attivo"
    t.integer "scadenza"
    t.bigint "OpHelpDesk"
  end

  create_table "normente", primary_key: "idnormente", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Tipo", limit: 2
    t.string "Descrizione", limit: 250
  end

  create_table "normtoponomastica", primary_key: "idnormdocumento", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "tipo", limit: 45
    t.string "Descrizione", limit: 45
  end

  create_table "note", primary_key: "IdNote", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente"
    t.string "Tipo", limit: 45
    t.text "Nota", size: :long
    t.bigint "IdOperatore"
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "Accesso", default: 0
    t.index ["IdUtente"], name: "user"
  end

  create_table "operatoriTelefonici", primary_key: "IdOperatore", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Operatore", limit: 45
    t.string "Codice", limit: 145
    t.integer "Stato"
    t.index ["IdOperatore"], name: "idoperatoriTelefonici_UNIQUE", unique: true
  end

  create_table "operatoripoint", primary_key: "idoperatoripoint", id: :integer, charset: "utf8", force: :cascade do |t|
    t.string "IdPoint", limit: 45
    t.string "UserName", limit: 45
    t.string "Password", limit: 45
    t.integer "Stato", default: 0
    t.date "DataAttivazione"
    t.date "DataBlocco"
    t.date "DataPassword"
  end

  create_table "organizzazioneazienda", primary_key: "idorganizzazioneazienda", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "organizzazioneazienda"
  end

  create_table "pagamentiutenze", primary_key: "cc", id: { type: :string, limit: 12 }, charset: "latin1", force: :cascade do |t|
    t.string "destinatario", limit: 125
  end

  create_table "pendingnote", primary_key: "idpendingnote", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idUser"
    t.integer "IdCreator"
    t.integer "IdOperator"
    t.datetime "insertdate", default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "expirydate"
    t.datetime "closingdate"
    t.integer "status", default: 1, comment: "1 Attivo, 0 Chiuso"
    t.index ["idpendingnote"], name: "idpendingnote_UNIQUE", unique: true
  end

  create_table "postaddebiti", primary_key: "idPostaddebiti", id: :integer, charset: "latin1", comment: nil, force: :cascade do |t|
    t.bigint "idservizio"
    t.datetime "datains", default: -> { "CURRENT_TIMESTAMP" }
    t.string "contoaddeb", limit: 56, null: false
    t.string "contoaccred", limit: 16, null: false
    t.integer "feePeriod"
    t.decimal "importo", precision: 10, scale: 2, comment: "Importo del canone relativo a quel prodotto"
    t.string "causale", limit: 200
    t.date "scadenza"
    t.string "saldato", limit: 5
    t.integer "periodico"
    t.decimal "parziale", precision: 10, scale: 2, default: "0.0"
    t.integer "IdOperatore", default: 0
    t.datetime "DataCancellazione"
    t.index ["contoaddeb"], name: "contoAdd"
  end

  create_table "postaddebitiarchivio", primary_key: ["idPostaddebiti", "scadenza"], charset: "latin1", force: :cascade do |t|
    t.integer "idPostaddebiti", null: false, auto_increment: true
    t.bigint "idservizio"
    t.datetime "datains", default: -> { "CURRENT_TIMESTAMP" }
    t.string "contoaddeb", limit: 16, null: false
    t.string "contoaccred", limit: 16, null: false
    t.string "causale", limit: 125
    t.integer "feePeriod"
    t.decimal "importo", precision: 10, scale: 2, comment: "Importo del canone relativo a quel prodotto"
    t.date "scadenza", null: false
    t.string "saldato", limit: 5
    t.boolean "periodico"
    t.decimal "parziale", precision: 10, scale: 2, default: "0.0"
    t.index ["contoaddeb"], name: "fk_pan_conti_idx"
  end

  create_table "postaddebitiold", primary_key: "idpostaddebiti", id: :integer, charset: "latin1", comment: nil, force: :cascade do |t|
    t.bigint "idservizio"
    t.datetime "datains", default: -> { "CURRENT_TIMESTAMP" }
    t.string "contoaddeb", limit: 16, null: false
    t.string "contoaccred", limit: 16, null: false
    t.integer "feePeriod"
    t.decimal "importo", precision: 10, scale: 2, comment: "Importo del canone relativo a quel prodotto"
    t.string "causale", limit: 125
    t.date "scadenza"
    t.string "saldato", limit: 5
    t.boolean "periodico"
    t.decimal "parziale", precision: 10, scale: 2, default: "0.0"
    t.index ["contoaddeb"], name: "fk_pan_conti_idx"
  end

  create_table "postepay", primary_key: "idpostepay", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio", null: false
    t.string "numeroCarta", limit: 45, null: false
    t.string "NomeTitolare", limit: 45
    t.string "CognomeTitolare", limit: 45
    t.string "CodFiscTitolare", limit: 45
    t.decimal "Importo", precision: 10, scale: 2
    t.string "NomeRichiedente", limit: 45
    t.string "CognomeRichiedente", limit: 45
    t.string "CodFiscRichiedente", limit: 45
    t.string "CodiceConferma", limit: 45, default: "\"0\""
    t.string "NumTelRichiedente", limit: 45, default: "\"0\""
    t.integer "Doc", default: 0
    t.integer "CF", default: 0
    t.index ["idpostepay"], name: "idpostepay_UNIQUE", unique: true
    t.index ["idservizio"], name: "idservizio_UNIQUE", unique: true
  end

  create_table "prefissiinternazionali", primary_key: "Nazione", id: { type: :string, limit: 100 }, charset: "latin1", force: :cascade do |t|
    t.string "Prefisso", limit: 45
    t.string "NazioneEn", limit: 45
  end

  create_table "prelievo", primary_key: "idprelievo", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.string "destinatario", limit: 95
    t.string "contodest", limit: 45
    t.string "ordinante", limit: 145
    t.bigint "idordinante"
    t.string "codicefiscale", limit: 45
    t.string "causale"
    t.string "numcarta", limit: 45
    t.string "wpin", limit: 8
    t.string "codfirma", limit: 45
    t.string "confermacodice", limit: 45
    t.string "nomeutente", limit: 145
    t.string "numtelefono", limit: 45
    t.decimal "quotaCbs", precision: 10, scale: 2
    t.index ["idservizio"], name: "idservizio"
  end

  create_table "prodotti", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idprodotto", null: false
    t.integer "prodottolistino", null: false
    t.integer "gruppo", null: false
    t.integer "codtabella", default: 0
    t.string "nome", limit: 250
    t.string "provider", limit: 5
    t.integer "scontrino", default: 0, null: false
    t.string "srv", limit: 25
    t.string "srvidCO", limit: 9
    t.string "srvid", limit: 25
    t.string "srvidEU", limit: 25
    t.string "OfferCode", limit: 20
    t.string "Action", limit: 25
    t.string "Operatore", limit: 12
    t.string "prodottoapi", limit: 12
    t.string "fornitore", limit: 5
    t.string "xmltype", limit: 12
    t.string "TipoOpCog", limit: 5
    t.string "stampa", limit: 5
    t.string "attivo", limit: 5
    t.decimal "Costo", precision: 10, scale: 2
    t.integer "TipoSpese", default: 0
    t.decimal "Spese", precision: 10, scale: 2
    t.integer "TipoCommissioni", default: 0
    t.decimal "Commissioni", precision: 10, scale: 2
    t.decimal "prezzo", precision: 10, scale: 2
    t.decimal "acquisto", precision: 10, scale: 3
    t.integer "TipoRevPoint", default: 0
    t.decimal "revenuepoint", precision: 10, scale: 2
    t.integer "TipoRevAg", default: 0
    t.decimal "revenueagenti", precision: 18, scale: 8
    t.integer "TipoRevAgReg", default: 0
    t.decimal "revenueagregionale", precision: 18, scale: 8
    t.integer "TipoRevAgNaz", default: 0
    t.decimal "revenueagnazionale", precision: 18, scale: 8
    t.integer "TipoRevAgEur", default: 0
    t.decimal "revenueageuropa", precision: 18, scale: 8
    t.integer "TipoRevAgMast", default: 0
    t.decimal "revenueagmaster", precision: 18, scale: 8
    t.integer "visualizza"
    t.date "create"
    t.string "notifica", limit: 5
    t.bigint "modifica", default: 0
    t.bigint "idlastupdate", default: 0
    t.string "iplastupdate", limit: 45, default: "0"
    t.date "dataupdate"
    t.decimal "base_risk", precision: 10, scale: 2, default: "1.01"
    t.index ["Costo"], name: "Costo_idx"
    t.index ["gruppo"], name: "gruppo_idx"
    t.index ["idprodotto"], name: "idprodotto_idx", unique: true
    t.index ["prodottolistino"], name: "prodottolistino_idx"
    t.index ["scontrino"], name: "scontrino_idx"
    t.index ["visualizza"], name: "visualizza_idx"
  end

  create_table "productstate", id: :integer, charset: "latin1", comment: "tabella che contiene gli stati di un conto", force: :cascade do |t|
    t.string "DescrizioneStato", limit: 45, null: false, comment: "Nome dello stato"
    t.text "Nota"
    t.index ["DescrizioneStato"], name: "DescrizioneStato_UNIQUE", unique: true
    t.index ["id"], name: "id_UNIQUE", unique: true
  end

  create_table "registrazioni_anagrafiche", primary_key: "IdRegistrazioni", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Nome", limit: 150
    t.string "Cognome", limit: 150
    t.string "RagioneSociale", limit: 250
    t.string "Email", limit: 250
    t.string "Token", limit: 150
    t.integer "Stato", default: 0
    t.integer "Broker"
    t.string "Network", limit: 45
    t.string "Tipo", limit: 2
    t.string "Lingua", limit: 4
    t.integer "tc", default: 0
    t.integer "pp", default: 0
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "relazioni_anagrafiche", primary_key: "idTableRelathion", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idUtente"
    t.bigint "idLegato"
    t.text "societa", size: :long
    t.text "societamadre", size: :long
    t.float "percentualeubo", limit: 53, default: 0.0
    t.text "note", size: :long
    t.integer "idCreator"
    t.datetime "creationDate", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "idModificatory"
    t.datetime "lastModifyDate", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "idTipoRelazione", comment: "1:UBO\\n2:Director\\n3:Owner"
    t.integer "idTipoLegato"
    t.integer "status", default: 1
    t.integer "RappresentanteLegale", limit: 1, default: 0
    t.datetime "endRelation"
    t.index ["idLegato"], name: "idlegato"
    t.index ["idUtente"], name: "idutente"
  end

  create_table "ricariche", primary_key: "idservizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "numerotelefono", limit: 45
    t.string "optelefonico", limit: 45
    t.string "action", limit: 45
    t.string "tipoopcog", limit: 45
    t.string "crocog", limit: 45, default: "vuoto"
    t.string "recID", default: "vuoto"
    t.string "auth", default: "vuoto"
    t.decimal "taglio", precision: 10, scale: 2, default: "0.0"
    t.string "codicetaglio", limit: 45, default: "0"
    t.string "valuta", limit: 45, default: "EUR"
    t.string "paese", limit: 45, default: "ITA"
    t.string "valorespedito", limit: 100, default: "vuoto"
    t.string "valorericevuto", limit: 100, default: "vuoto"
    t.string "timestamp", limit: 45, default: "vuoto"
    t.string "trid", limit: 45, default: "0000"
    t.string "pin", limit: 45
    t.string "expiration", limit: 45
    t.string "seriale", limit: 45, default: "0000"
  end

  create_table "ricarichecarta", primary_key: "idservizio", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "destinatario", limit: 45
    t.string "numerocarta", limit: 45
    t.string "numerocrip", limit: 45
    t.string "provenienza", limit: 45, default: "\"\""
    t.string "pagatafornitore", limit: 45, default: "\"\""
    t.string "datapagfornitore", limit: 45, default: "\"\""
    t.string "wallet", limit: 45, default: "0"
    t.string "webpin", limit: 6, default: "000000"
    t.string "causale", limit: 251, default: " "
    t.decimal "quotaCbs", precision: 10, scale: 2, default: "0.0"
    t.integer "giustificativo", default: 0
  end

  create_table "ricevute", primary_key: "idricevute", charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.string "idtrans", limit: 45
    t.string "idutente", limit: 45
    t.string "nome", limit: 45
    t.string "email", limit: 45
    t.index ["idservizio"], name: "idservizio"
  end

  create_table "richiestamastercard", primary_key: ["idrichiestamastercard", "idservizio"], charset: "latin1", force: :cascade do |t|
    t.bigint "idrichiestamastercard", null: false, auto_increment: true
    t.bigint "idservizio", null: false
    t.bigint "idutente"
    t.string "codicefiscale", limit: 45
    t.bigint "idpoint"
    t.integer "gestito", default: 0
  end

  create_table "rid", primary_key: "IdRID", charset: "latin1", force: :cascade do |t|
    t.bigint "IdServizio", default: 0
    t.bigint "IdUtente", default: 0
    t.string "ContoAddebito", limit: 20
    t.string "ContoAccredito", limit: 20
    t.decimal "Amount", precision: 10, scale: 2, default: "0.0"
    t.string "Causale", limit: 150
    t.integer "Stato", default: 0
    t.integer "Periodicita", default: 0
    t.boolean "Periodico", default: false
    t.date "Scadenza"
    t.datetime "DataInserimento", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "Tentativi", default: 180
    t.index ["ContoAddebito"], name: "contoAdd"
  end

  create_table "rischio", primary_key: ["IdUtente", "Data"], charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente", null: false
    t.decimal "Rischio", precision: 10, scale: 2, default: "0.0"
    t.datetime "Data", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["Data", "Rischio"], name: "rischio_and_data_index"
    t.index ["Rischio"], name: "Rischio"
  end

  create_table "saldicog", primary_key: "idsaldicog", id: :integer, charset: "latin1", force: :cascade do |t|
    t.float "saldo", limit: 53
    t.datetime "data"
  end

  create_table "saldiprovider", primary_key: "IdSaldiProvider", id: :integer, charset: "latin1", force: :cascade do |t|
    t.datetime "Data"
    t.string "Provider", limit: 15
    t.decimal "Saldo", precision: 10, scale: 2
  end

  create_table "scontrini", id: :integer, charset: "utf8", force: :cascade do |t|
    t.integer "idprodotto", default: 0, null: false
    t.string "nome", limit: 50
    t.text "ricevuta", size: :long
    t.text "ricevutacoge", size: :long
    t.text "preview", size: :long
    t.text "NewScontrino", size: :long
    t.text "ScontrinoEur", size: :long
    t.index ["idprodotto"], name: "idprodotto_UNIQUE", unique: true
    t.index ["idprodotto"], name: "idprototto"
  end

  create_table "sdd", primary_key: "IdSdd", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente"
    t.datetime "DataRichiesta", default: -> { "CURRENT_TIMESTAMP" }
    t.decimal "Importo", precision: 10, scale: 2, default: "0.0"
    t.date "DataInizio"
    t.integer "Stato", default: 0, comment: "0 richiesta 1 attivo 2 richiesta cancellazione 3 cancellato"
  end

  create_table "segnalazioni", primary_key: "IdSegnalazione", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente"
    t.decimal "Importo", precision: 10, scale: 2
    t.string "Note", limit: 245
    t.datetime "Data"
    t.integer "IdOperatore"
    t.integer "Stato"
    t.datetime "DataFine"
    t.integer "IdOperatoreFine"
  end

  create_table "servizi", primary_key: "idservizio", charset: "latin1", force: :cascade do |t|
    t.bigint "point", default: 0
    t.string "ccaddebito", limit: 45, default: "0"
    t.bigint "prodotto", default: 0
    t.integer "gruppo", default: 0
    t.string "nomeprodotto", limit: 250, default: "0"
    t.integer "status", default: 0
    t.decimal "importo", precision: 10, scale: 2, default: "0.0"
    t.decimal "commissioni", precision: 10, scale: 2, default: "0.0"
    t.decimal "spese", precision: 10, scale: 2, default: "0.0"
    t.decimal "revenuepoint", precision: 10, scale: 2
    t.decimal "revAgenti", precision: 10, scale: 2, default: "0.0"
    t.decimal "revRegionali", precision: 10, scale: 2, default: "0.0"
    t.decimal "revNazionali", precision: 10, scale: 2, default: "0.0"
    t.decimal "revMaster", precision: 10, scale: 2, default: "0.0"
    t.string "validazione", limit: 45, default: "\"\""
    t.text "note"
    t.datetime "datainserimento"
    t.string "datanumerica", limit: 45
    t.datetime "datapagamento"
    t.datetime "lastupdate"
    t.decimal "addebito", precision: 10
    t.decimal "saldooperazione", precision: 10
    t.bigint "operatore", default: 0
    t.integer "scaricata"
    t.integer "confermata"
    t.string "optval", limit: 45, default: "\"\""
    t.bigint "vendor"
    t.string "url", limit: 150, default: "\"\""
    t.string "provider", limit: 45, default: "\"\""
    t.text "xmlin"
    t.text "xmlout"
    t.string "riscog", limit: 45, default: "\"\""
    t.string "timestampcog", limit: 30
    t.bigint "provenienza"
    t.bigint "idcausale"
    t.string "point_operator", default: "\"\""
    t.index ["datainserimento"], name: "datainserimento"
    t.index ["importo"], name: "importo"
    t.index ["nomeprodotto"], name: "nomeprodotto"
    t.index ["operatore"], name: "operatore"
    t.index ["point"], name: "point"
    t.index ["prodotto"], name: "prodotto"
    t.index ["status"], name: "status"
  end

  create_table "setting_compliance", primary_key: "idsetting_compliance", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "lastidread"
    t.integer "limitread"
    t.date "startdatecheck"
  end

  create_table "smartpay", primary_key: "idsmartpay", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idservizio"
    t.bigint "idutente"
    t.string "codicefiscale", limit: 45
    t.bigint "destinatario"
    t.string "contobusiness", limit: 45
    t.string "contodispositivo", limit: 45
    t.string "contonondispositivo", limit: 45
    t.integer "tiporicarica", default: 0
  end

  create_table "sms", primary_key: "idsms", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "device", limit: 150
    t.string "phone", limit: 150
    t.string "smscenter", limit: 150
    t.string "text", limit: 250
    t.datetime "data", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "sogliespedizioni", primary_key: "IdSoglieSpedizioni", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.integer "Peso"
    t.float "Prezzo", limit: 53
  end

  create_table "spedizioni", primary_key: "idservizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "mittente", limit: 150
    t.string "via", limit: 150
    t.string "civico", limit: 10
    t.string "localita", limit: 150
    t.string "cap", limit: 10
    t.string "provincia", limit: 45
    t.string "telefono", limit: 45
    t.string "destinatario", limit: 150
    t.string "dindirizzo", limit: 150
    t.string "dcivico", limit: 45
    t.string "dlocalita", limit: 150
    t.string "dcap", limit: 10
    t.string "dprov", limit: 45
    t.string "dtelefono", limit: 45
    t.string "peso", limit: 45
    t.string "pesovol", limit: 45
    t.string "volume", limit: 45
    t.string "contenuto", limit: 150
    t.string "portofranco", limit: 45, default: "\"\""
    t.string "isole", limit: 45, default: "\"\""
  end

  create_table "spedizioni_mastercard", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idservizio"
    t.integer "idutente"
    t.string "packaging_number", limit: 150
    t.string "track_trace", limit: 100
    t.string "date", limit: 30
    t.string "tipo_indirizzo", limit: 45
    t.string "card_holderId", limit: 200
    t.integer "attesa_indirizzo", default: 0
    t.integer "close_dettails", default: 0
    t.index ["idservizio"], name: "idservizio"
    t.index ["idutente"], name: "idutente"
  end

  create_table "stati", primary_key: "idstato", id: :integer, default: nil, charset: "latin1", options: "ENGINE=MyISAM", force: :cascade do |t|
    t.string "stato", limit: 100
  end

  create_table "statiservizi", primary_key: "idstatiservizi", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "descrizione", limit: 45
  end

  create_table "subconcession", primary_key: "idSubConcession", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "IdConcessione"
    t.string "Nome_Concessione", limit: 45
    t.string "SubConcessione", limit: 45
    t.string "SiteCode", limit: 45
    t.string "Dominio", limit: 60
    t.string "IdConto", limit: 20, default: "0"
  end

  create_table "substati", primary_key: "IdSubStati", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Descrizione", limit: 45
  end

  create_table "table_risk_movements", id: false, charset: "latin1", force: :cascade do |t|
    t.bigint "movement_id", default: 0
    t.bigint "service_id"
    t.integer "user_id"
    t.datetime "movement_created_at"
    t.integer "service_status", default: 0
    t.datetime "service_updated_at"
    t.decimal "movement_amount", precision: 10, scale: 2, default: "0.0"
    t.integer "product_net_id", null: false
    t.integer "product_id", null: false
    t.string "product_name", limit: 250
    t.integer "table_code", default: 0
    t.decimal "product_base_risk", precision: 10, scale: 2, default: "1.01"
    t.string "table_name", limit: 45
    t.string "beneficiary", limit: 191
    t.index ["movement_created_at"], name: "movement_created_index"
    t.index ["movement_id", "movement_created_at", "beneficiary"], name: "movement_id_and_mov_created_and_beneficiary"
    t.index ["movement_id"], name: "movement_id_index"
    t.index ["product_name"], name: "product_name_index"
    t.index ["product_net_id", "beneficiary"], name: "product_net_and_beneficiary"
    t.index ["product_net_id", "user_id"], name: "product_net_and_user_index"
    t.index ["user_id", "beneficiary", "product_net_id", "movement_created_at"], name: "full_index"
    t.index ["user_id", "movement_created_at"], name: "user_and_movement_created"
    t.index ["user_id"], name: "user_index"
  end

  create_table "telegrammi", primary_key: "idtelegrammi", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "idservizio", limit: 45
    t.string "destinatario", limit: 150
    t.string "dindirizzo", limit: 45
    t.string "dlocalita", limit: 45
    t.string "dcap", limit: 45
    t.string "dprov", limit: 45
    t.text "testotelegramma"
    t.integer "lungteleg"
    t.decimal "importo", precision: 10, scale: 2
    t.string "eseguito", limit: 150
    t.string "via", limit: 150
    t.string "localita", limit: 150
    t.string "numerotelefono", limit: 40
    t.string "cap", limit: 10
    t.string "provincia", limit: 45
    t.string "civico", limit: 45
    t.string "dcivico", limit: 45
  end

  create_table "tipi", primary_key: "IdTipo", id: :integer, default: nil, charset: "utf8", force: :cascade do |t|
    t.string "Tipo", limit: 100, null: false
    t.decimal "base_risk", precision: 10, scale: 2, default: "5.0"
  end

  create_table "tipidocumenti", primary_key: "IdTipoDocumento", id: :integer, charset: "utf8", force: :cascade do |t|
    t.string "TipoDocumento", limit: 100, null: false, collation: "latin1_swedish_ci"
    t.integer "Visualizza", default: 1
  end

  create_table "tipirelazione", primary_key: "idTipoRelazione", id: :integer, default: nil, charset: "latin1", force: :cascade do |t|
    t.text "descrizione"
    t.text "descrizioneEn"
  end

  create_table "tipo_prodotti", primary_key: "menm_prodotti", id: { type: :string, limit: 8 }, charset: "latin1", force: :cascade do |t|
    t.integer "idprodotti", null: false, auto_increment: true
    t.string "descr_prodotti", limit: 45
    t.index ["idprodotti"], name: "idcarat_prodotti_UNIQUE", unique: true
  end

  create_table "tipoaddebito", primary_key: "idTipoAddebito", id: { type: :integer, comment: "Codice 3 char per tipo di addebito", default: nil }, charset: "latin1", force: :cascade do |t|
    t.string "Tipo", limit: 45, default: "MON", comment: "Tipo di addebito (giornaliero,mensile, annuale, gratis)"
    t.integer "idAddb", null: false, auto_increment: true
    t.index ["idAddb"], name: "id_UNIQUE", unique: true
  end

  create_table "tipobusiness", primary_key: "idtipobusiness", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "tipobusiness"
  end

  create_table "tipoconto", primary_key: "idTipoConto", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Tipo", limit: 6, null: false
    t.string "Descrizione", limit: 45, null: false
    t.decimal "limite1", precision: 10, scale: 2, default: "500.0"
    t.decimal "limite2", precision: 10, scale: 2, default: "2500.0"
    t.boolean "VisualizzaMandati", default: false
    t.string "TesoreriaIssuing", limit: 45
    t.string "TesoreriaUtenze", limit: 45
    t.string "TesoreriaMonetica", limit: 45
    t.string "TesoreriaRicariche", limit: 45
    t.string "TesoreriaRicarichePin", limit: 45
    t.string "TesoreriaSpedizioni", limit: 45
    t.string "TesoreriaBonifici", limit: 45
    t.string "TesoreriaCarteServizi", limit: 45
    t.string "TesoreriaRicevute", limit: 45
    t.string "TesoreriaIntrapay", limit: 45
    t.string "TesoreriaAsap", limit: 45
    t.string "TesoreriaPayTv", limit: 45
    t.string "TesoreriaProdottiPin", limit: 45
    t.string "TesoreriaEasyPay", limit: 45
    t.string "TesoreriaPrelievi", limit: 45
    t.string "TesoreriaFastPay", limit: 45
    t.string "TesoreriaEvo", limit: 45
    t.string "TesoreriaToken", limit: 45
    t.string "TesoreriaCanoni", limit: 45
    t.string "TesoreriaCommFigp", limit: 45
    t.string "TesoreriaAsapOnline", limit: 45
    t.string "TesoreriaCBS", limit: 45
    t.string "TesoreriaGF", limit: 45
    t.string "TesoreriaAssegni", limit: 45
    t.index ["idTipoConto"], name: "idTipoConto_UNIQUE", unique: true
  end

  create_table "tipocontoNew", primary_key: "idTipoConto", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Provider", limit: 6, null: false
    t.string "Descrizione", limit: 45, null: false
    t.boolean "VisualizzaMandati", default: false
    t.string "Tesoreria", limit: 45
    t.string "ProfitLoss", limit: 45
    t.string "Iban", limit: 75
    t.string "Bic", limit: 45
    t.string "Nome", limit: 145
    t.string "Causale", limit: 145
    t.index ["idTipoConto"], name: "idTipoConto_UNIQUE", unique: true
  end

  create_table "tipotrans", primary_key: "TipoTrans", id: { type: :string, limit: 1 }, charset: "latin1", force: :cascade do |t|
    t.integer "idTipoTrans", null: false
    t.integer "idTran", null: false, auto_increment: true
    t.index ["idTran"], name: "idTran_UNIQUE", unique: true
  end

  create_table "token", primary_key: ["IdToken", "IdUtente"], charset: "latin1", force: :cascade do |t|
    t.integer "IdToken", null: false
    t.integer "t1", null: false, unsigned: true
    t.integer "t2", null: false, unsigned: true
    t.integer "t3", null: false, unsigned: true
    t.integer "t4", null: false, unsigned: true
    t.integer "t5", null: false, unsigned: true
    t.integer "t6", null: false, unsigned: true
    t.integer "t7", null: false, unsigned: true
    t.integer "t8", null: false, unsigned: true
    t.integer "t9", null: false, unsigned: true
    t.integer "t10", null: false, unsigned: true
    t.integer "t11", null: false, unsigned: true
    t.integer "t12", null: false, unsigned: true
    t.integer "t13", null: false, unsigned: true
    t.integer "t14", null: false, unsigned: true
    t.integer "t15", null: false, unsigned: true
    t.integer "t16", null: false, unsigned: true
    t.integer "t17", null: false, unsigned: true
    t.integer "t18", null: false, unsigned: true
    t.integer "t19", null: false, unsigned: true
    t.integer "t20", null: false, unsigned: true
    t.integer "t21", null: false, unsigned: true
    t.integer "t22", null: false, unsigned: true
    t.integer "t23", null: false, unsigned: true
    t.integer "t24", null: false, unsigned: true
    t.integer "t25", null: false, unsigned: true
    t.integer "t26", null: false, unsigned: true
    t.integer "t27", null: false, unsigned: true
    t.integer "t28", null: false, unsigned: true
    t.integer "t29", null: false, unsigned: true
    t.integer "t30", null: false, unsigned: true
    t.integer "t31", null: false, unsigned: true
    t.integer "t32", null: false, unsigned: true
    t.integer "t33", null: false, unsigned: true
    t.integer "t34", null: false, unsigned: true
    t.integer "t35", null: false, unsigned: true
    t.integer "t36", null: false, unsigned: true
    t.integer "Stato", default: 0
    t.bigint "IdUtente", default: 0, null: false
    t.date "DataAttivazione"
    t.date "DataScadenza"
    t.integer "Utilizzi", default: 0
    t.integer "UltimoUtilizzo", default: 0
    t.integer "NumeroErrori", default: 0
    t.index ["IdUtente"], name: "idutente"
  end

  create_table "tokenapp", primary_key: ["IdUtente", "Token"], charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente", null: false
    t.string "Token", limit: 45, null: false
    t.string "SmsCode", limit: 10
    t.datetime "Scadenza"
    t.integer "Stato", default: 0
  end

  create_table "tokenpos", primary_key: ["IdUtente", "Token"], charset: "latin1", force: :cascade do |t|
    t.bigint "IdUtente", null: false
    t.string "Token", limit: 150, null: false
    t.date "Scadenza"
  end

  create_table "topic", primary_key: "idtopic", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "topicIT"
    t.string "topicEN"
    t.integer "iddepartment"
    t.integer "sorting"
    t.index ["idtopic"], name: "idtopic_UNIQUE", unique: true
  end

  create_table "trader", primary_key: "idtrader", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Descrizione", limit: 150
    t.integer "trader"
    t.integer "subtrader"
    t.integer "GeneralTrader", default: 0
    t.integer "BrokerTrader", default: 0
    t.string "numcontoTrader", limit: 45
    t.string "numcontoSubTrader", limit: 45
    t.string "numcontoGeneralTrader", limit: 45
    t.string "numcontoBrokerTrader", limit: 45
  end

  create_table "tradingCrypto", primary_key: "idacquistoCripto", id: :integer, charset: "latin1", force: :cascade do |t|
    t.bigint "idServizio", null: false
    t.bigint "idUtente", null: false
    t.decimal "importoAcquistato", precision: 10, scale: 2
    t.decimal "importoVenduto", precision: 10, scale: 2, default: "0.0"
    t.decimal "prezzoMoneta", precision: 20, scale: 8
    t.decimal "monetaAcquistata", precision: 20, scale: 8
    t.decimal "monetaVenduta", precision: 20, scale: 8, default: "0.0"
    t.datetime "data", default: -> { "CURRENT_TIMESTAMP" }
    t.string "network", limit: 45, default: "0"
    t.string "networkfee", limit: 45, default: "0"
    t.string "blockIOfee", limit: 45, default: "0"
    t.decimal "monetaSpostata", precision: 20, scale: 8, default: "0.0"
    t.string "toaddress", default: "0"
    t.index ["idServizio"], name: "idServizio_UNIQUE", unique: true
    t.index ["idacquistoCripto"], name: "idacquistoCripto_UNIQUE", unique: true
  end

  create_table "triggers_test", id: :integer, charset: "latin1", force: :cascade do |t|
    t.integer "idservizio", default: 0
  end

  create_table "usersdd", primary_key: "IdUtenteAnonimo", id: :integer, charset: "latin1", force: :cascade do |t|
    t.string "Nome", limit: 50
    t.string "Cognome", limit: 50
    t.string "Indirizzo", limit: 150
    t.string "Citta", limit: 45
    t.string "Nazione", limit: 3
    t.string "Cellulare", limit: 20
    t.string "NumeroCarta", limit: 18
    t.date "DataNascita"
    t.string "Email", limit: 145
    t.datetime "DataRegistrazione", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "Attivo", default: 0
  end

  create_table "utenze", primary_key: "idservizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "idanagrafeUtenze", limit: 45
    t.string "cc", limit: 45
    t.string "intestato", limit: 150
    t.decimal "importo", precision: 10, scale: 2
    t.string "causale", limit: 150
    t.string "eseguito", limit: 150
    t.string "via", limit: 150
    t.string "localita", limit: 150
    t.string "numerotelefono", limit: 40
    t.string "cap", limit: 10
    t.string "provincia", limit: 45
    t.string "mailmittente", limit: 45, default: "nd"
    t.string "scadenza", limit: 45, default: "00000000"
    t.string "codice", limit: 45, default: "\"\""
    t.string "codicemav", limit: 45, default: "\"\""
    t.string "codicefiscale", limit: 45, default: "\"\""
    t.string "documento", limit: 45, default: "\"\""
    t.string "td", limit: 45
    t.string "NumBollettino", limit: 45, default: "vuoto"
    t.string "TipoDoc", limit: 45, default: "vuoto"
    t.string "SezionePag", limit: 45, default: "vuoto"
    t.string "UffPag", limit: 45, default: "vuoto"
    t.string "Pagamento", limit: 45, default: "vuoto"
    t.string "validazione", limit: 45, default: "vuoto"
    t.string "validatocog", limit: 45, default: "0"
    t.string "risCog", limit: 45, default: "vuoto"
    t.string "billAccountId", limit: 45, default: "0"
    t.string "billerSiaCode", limit: 45, default: "0"
  end

  create_table "utenzeaflusso", primary_key: "idservizio", id: :bigint, default: nil, charset: "latin1", force: :cascade do |t|
    t.string "idanagrafeUtenze", limit: 45
    t.string "cc", limit: 45
    t.string "intestato", limit: 150
    t.decimal "importo", precision: 10, scale: 2
    t.string "causale", limit: 150
    t.string "eseguito", limit: 150
    t.string "via", limit: 150
    t.string "localita", limit: 150
    t.string "numerotelefono", limit: 40
    t.string "cap", limit: 10
    t.string "provincia", limit: 45
    t.string "scadenza", limit: 45, default: "00000000"
    t.string "codiceBollettino", limit: 45, default: "\"\""
    t.string "codicefiscale", limit: 45, default: "\"\""
    t.string "validazione", limit: 45, default: "vuoto"
    t.string "codiceCliente", limit: 15
    t.string "ibandest", limit: 45
    t.string "swift", limit: 45
    t.string "dloc", limit: 45
  end

  create_table "valuta", primary_key: "idvaluta", id: { type: :string, limit: 6, default: "EUR" }, charset: "latin1", force: :cascade do |t|
    t.string "nomevaluta", limit: 45, default: "Euro", null: false
    t.integer "id", null: false, auto_increment: true
    t.index ["id"], name: "id_UNIQUE", unique: true
    t.index ["nomevaluta"], name: "nomevaluta_UNIQUE", unique: true
  end

  create_table "vendor", id: :integer, default: nil, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.integer "Listino"
    t.string "ragionesociale", limit: 70, collation: "utf8_general_ci"
    t.integer "ordine"
    t.text "email", size: :long, collation: "utf8_general_ci"
    t.text "emailRetailCred", size: :long, collation: "utf8_general_ci"
    t.text "emailagenti", size: :long, collation: "utf8_general_ci"
    t.string "link", limit: 136, collation: "utf8_general_ci"
    t.string "AreaSviluppo", limit: 142, collation: "utf8_general_ci"
    t.string "AreaProduzione", limit: 139, collation: "utf8_general_ci"
    t.string "Wallet", limit: 16, default: "0", collation: "utf8_general_ci"
    t.string "RespRete", limit: 60, collation: "utf8_general_ci"
    t.string "Concession", limit: 20, collation: "utf8_general_ci"
    t.integer "HelpDesk", default: 801
    t.string "ContoSkinMaster", limit: 16, collation: "utf8_general_ci"
    t.string "IdConto", limit: 20, default: "0", collation: "utf8_general_ci"
    t.text "footer", size: :long, collation: "utf8_general_ci"
    t.string "contoRid", limit: 45, collation: "utf8_general_ci"
    t.integer "Visualizza", default: 1
    t.text "privacy", size: :long
  end

  add_foreign_key "aml_domande", "aml_questionario", column: "IdQuestionario", primary_key: "IdQuestionario", name: "IdQuestionario"
  add_foreign_key "aml_risposte", "aml_domande", column: "IdDomanda", primary_key: "IdDomanda", name: "IdDomanda"
  add_foreign_key "caratt_prodotti", "tipoaddebito", column: "feePeriod", primary_key: "idTipoAddebito", name: "fk_addebito", on_update: :cascade
  add_foreign_key "movimenticonti", "tipotrans", column: "TipoTransazione", primary_key: "TipoTrans", name: "fk_tipotransazione"
end
