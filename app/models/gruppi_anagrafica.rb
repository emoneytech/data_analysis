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
  from `anagrafiche` group by `anagrafiche`.`Codicefiscale` 
  having (count(`anagrafiche`.`Codicefiscale`) > 1) 
  order by count(`anagrafiche`.`Codicefiscale`) desc
=end
