import React from 'react';
import UrunTablo from './UrunTablo';
import { UrunConsumer } from '../Context';

const IcecekUrunCard = () => {
  return (
    <UrunConsumer>
      {value => (
        <section className="section_our_solution">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  {value.urunler
                    .filter(urun => urun.tur === 'icecek')
                    .map(urun => (
                      <div key={urun.id} className="solution_card">
                        <div className="hover_color_bubble"></div>
                        <div className="solu_description">
                          <UrunTablo
                            title={urun.title}
                            fiyat={urun.fiyat}
                            urunBilesen={urun.urunBilesen}
                            id={urun.id}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </UrunConsumer>
  );
}

export default IcecekUrunCard;
