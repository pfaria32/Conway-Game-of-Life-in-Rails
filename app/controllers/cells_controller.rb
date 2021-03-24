class CellsController < ApplicationController

 def index
  @cells = Cell.all
  @x = 1000
  @y = 1000
 end
  # def rule_1(cell)  # Any live cell with fewer than two live neighbors dies, as if caused by under population.
  #                   # Any live cell with two or three live neighbors lives on to the next generation.
  #   scenario_1 = true Cell.find(x + 1 != nil && x - 1 != nil
  #   scenario_2 = true if y + 1 != nil && y - 1 != nil
  #   scenario_3 = true if x + 1 != nil && y + 1 != nil
  #   scenario_4 = true if x + 1 != nil && y - 1 != nil
  #   scenario_5 = true if x - 1 != nil && y + 1 != nil
  #   scenario_6 = true if x - 1 != nil && y - 1 != nil
  #   unless scenario_1 || scenario_2 || scenario_3 || scenario_4 || scenario_5 || scenario_6
  #     @cell_repository.destroy(cell)
  #   end
  # end

  # def rule_2(x, y)  # Any live cell with more than three live neighbors dies, as if by overpopulation.
  #   scenario_1 = true if x + 1 != nil && x - 1 != nil && y + 1 != nil
  #   scenario_2 = true if x + 1 != nil && x - 1 != nil && y - 1 != nil
  #   scenario_3 = true if x + 1 != nil && x + 1 != nil && y + 1 != nil
  #   scenario_4 = true if x + 1 != nil && x + 1 != nil && y - 1 != nil
  #   scenario_5 = true if x - 1 != nil && x + 1 != nil && y + 1 != nil
  #   scenario_6 = true if x - 1 != nil && x - 1 != nil && y + 1 != nil
  #   scenario_6 = true if x - 1 != nil && x + 1 != nil && y - 1 != nil
  #   scenario_7 = true if x - 1 != nil && x - 1 != nil && y - 1 != nil
  #   unless scenario_1 || scenario_2 || scenario_3 || scenario_4 || scenario_5 || scenario_6 || scenario_7
  #     @cell_repository.destroy(cell)
  #   end
  # end

  # def rule_3(cell) # Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
  #   scenario_1 = true if x + 1 != nil && x - 1 != nil && y + 1 != nil
  #   scenario_2 = true if x + 1 != nil && x - 1 != nil && y - 1 != nil
  #   scenario_3 = true if x + 1 != nil && x + 1 != nil && y + 1 != nil
  #   scenario_4 = true if x + 1 != nil && x + 1 != nil && y - 1 != nil
  #   scenario_5 = true if x - 1 != nil && x + 1 != nil && y + 1 != nil
  #   scenario_6 = true if x - 1 != nil && x - 1 != nil && y + 1 != nil
  #   scenario_6 = true if x - 1 != nil && x + 1 != nil && y - 1 != nil
  #   scenario_7 = true if x - 1 != nil && x - 1 != nil && y - 1 != nil
  # unless scenario_1 || scenario_2 || scenario_3 || scenario_4 || scenario_5 || scenario_6 || scenario_7
  #   @cell_repository.destroy(cell)
  # end


end
