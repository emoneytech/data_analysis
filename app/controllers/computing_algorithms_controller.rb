class ComputingAlgorithmsController < ApplicationController
  add_breadcrumb helpers.raw(
                   "#{helpers.fa_icon('square-root-variable')} #{I18n.t(:computing_algorithms, default: 'Algorithms')}",
                 ),
                 :computing_algorithms

  def index; end
  def amount_factor
    add_breadcrumb helpers.raw(
                     "#{EvaluatedMovement.human_attribute_name(:amount_factor)}",
                   ),
                   %i[amount_factor computing_algorithms]
  end

  def country_factor
    add_breadcrumb helpers.raw(
                     "#{EvaluatedMovement.human_attribute_name(:country_factor)}",
                   ),
                   %i[country_factor computing_algorithms]
  end

  def product_factor
    add_breadcrumb helpers.raw(
                     "#{EvaluatedMovement.human_attribute_name(:product_factor)}",
                   ),
                   %i[product_factor computing_algorithms]
  end
  def recursion_factor
    add_breadcrumb helpers.raw(
                     "#{EvaluatedMovement.human_attribute_name(:recursion_factor)}",
                   ),
                   %i[recursion_factor computing_algorithms]
  end
end
