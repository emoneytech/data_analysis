class RelatedCountry < CorePgRecord

  def previous
    self.class.unscoped.where('alpha2 < ?', alpha2).order('alpha2 DESC').first
  end
  
  def next
    self.class.unscoped.where('alpha2 > ?', alpha2).order('alpha2 ASC').first
  end


end
