import React from 'react';
import UrunTablo from './UrunTablo';

const UrunCard = (props) => {
  
  return (

  <div class="section_our_solution">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="our_solution_category">
          <div class="solution_cards_box">
            <div class="solution_card">
              <div class="hover_color_bubble"></div>
                <div class="solu_description">
                  <UrunTablo title={props.title} fiyat={props.fiyat}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )

}

export default UrunCard;