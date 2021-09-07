# == Schema Information
#
# Table name: gruppi_anagrafiche
#
#  codice_fiscale       :string(26)       primary key
#  count_codice_fiscale :bigint           default(0), not null
#

class GruppiAnagrafica < ApplicationCoreRecord

  self.table_name = "gruppi_anagrafiche"
  self.primary_key = 'codice_fiscale'

end

=begin
CREATE OR REPLACE VIEW `gruppi_anagrafiche` 
  AS select `anagrafiche`.`Codicefiscale` AS `codice_fiscale`,
  count(`anagrafiche`.`Codicefiscale`) AS `count_codice_fiscale` 
  from `anagrafiche` 
  WHERE `anagrafiche`.`Attivo` != 6
  AND `anagrafiche`.`IdTipo` IN (3, 9, 2)
  AND `anagrafiche`.`Codicefiscale` != ''
  group by `anagrafiche`.`Codicefiscale`
  having (`count_codice_fiscale` > 1)
  order by count(`anagrafiche`.`Codicefiscale`) desc
=end
