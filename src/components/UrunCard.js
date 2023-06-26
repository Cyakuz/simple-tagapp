import React from 'react';
import UrunTablo from './UrunTablo';
import { UrunConsumer } from '../Context';
const UrunCard = (props) => {
  
  return (
<UrunConsumer>
      {value => (
  <div class="section_our_solution">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="our_solution_category">
          <div class="solution_cards_box">
                {value.urunler.map(urun => (
                    <div key={urun.id} className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div className="solu_description">
                        <UrunTablo title={urun.title} fiyat={urun.fiyat} />
                      </div>
                    </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )}
  </UrunConsumer>
  )

}

export default UrunCard;