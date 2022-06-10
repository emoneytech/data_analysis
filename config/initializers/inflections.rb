# Be sure to restart your server when you modify this file.

# Add new inflection rules using the following format. Inflections
# are locale specific, and you may define rules for as many different
# locales as you wish. All of these examples are active by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.plural /^(ox)$/i, '\1en'
#   inflect.singular /^(ox)en/i, '\1'
#   inflect.irregular 'person', 'people'
#   inflect.uncountable %w( fish sheep )
# end

# These inflection rules are supported but not enabled by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.acronym 'RESTful'
# end
ActiveSupport::Inflector.inflections do |inflect|
  inflect.irregular 'AmlCronologiaQuestionario', 'AmlCronologiaQuestionari'
  inflect.irregular 'AmlDomanda', 'AmlDomande'
  inflect.irregular 'AmlQuestionario', 'AmlQuestionari'
  inflect.irregular 'AmlRisposta', 'AmlRisposte'
  inflect.irregular 'Anagrafica', 'Anagrafiche'
  inflect.irregular 'Assegnovirtuale', 'Assegnivirtuali'
  inflect.irregular 'Bonifico', 'Bonifici'
  inflect.irregular 'Codicetabella', 'Codicitabelle'
  inflect.irregular 'Conto', 'Conti'
  inflect.irregular 'FamilyConto', 'FamiliesConti'
  inflect.irregular 'Intra', 'Intrapay'
  inflect.irregular 'IncassoAssegno', 'IncassiAssegni'
  inflect.irregular 'Fattura', 'Fatture'
  inflect.irregular 'Gruppo', 'Gruppi'
  inflect.irregular 'Mandato', 'Mandati'
  inflect.irregular 'Movimentoconto', 'Movimenticonti'
  inflect.irregular 'Prodotto', 'Prodotti'
  inflect.irregular 'Rischio', 'Rischi'
  inflect.irregular 'Tipo', 'Tipi'
  inflect.irregular 'Ricarica', 'Ricariche'
  inflect.irregular 'Ricaricacarta', 'Ricarichecarta'
  inflect.irregular 'Servizio', 'Servizi'
  inflect.irregular 'Statoservizio', 'Statiservizi'
  inflect.irregular 'RelazioneAnagrafica', 'RelazioniAnagrafiche'
end
