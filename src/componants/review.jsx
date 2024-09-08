const Review = ()=> {
    return(
        <section className="client_section layout_padding-bottom">
  <div className="container">
    <div className="heading_container heading_center psudo_white_primary mb_45">
      <h2>What Says Our Customers</h2>
    </div>
    <div className="carousel-wrap row ">
      <div className="owl-carousel client_owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(-1080px, 0px, 0px)",
              transition: "0.25s",
              width: 2160
            }}
          >
            <div className="owl-item cloned" style={{ width: 360 }}>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>6666</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 360 }}>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>555</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 360 }}>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>444</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: 360 }}>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                    “Ah, the Krusty Krab. What a sigh wonderful establishment of mediocrity. If you enjoy greasy, flavorless patties made by a square sponge who’s as cheerful as he is clueless, then this place is just for you. The Krabby Patty? A culinary disaster! But of course, it has its legions of mindless fans who don’t know any better. I’ll give it a star for being a beacon of everything I strive to overthrow. Good luck, Krusty Krab! You’ll need it!”
                    </p>
                    <h6>Plankton, Owner of the Chum Bucket</h6>
                    <p>Evil Genius and Restaurateur</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client3.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned active" style={{ width: 360 }}>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                    "Oh, barnacles, this place is AMAZING! The atmosphere is so cheerful, and the employees? Well, they're just the best—especially that guy behind the grill! I’ve never had a Krabby Patty this fresh, juicy, and perfectly cooked. It’s like the flavors are doing the jellyfish jam in my mouth! 10 out of 10, I’d definitely recommend this place to anyone who loves happiness on a bun! I’ll be coming back every day!"


                    </p>
                    <h6>PattyTastepants</h6>
                    <p>Jellyfish Researcher</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 360 }}>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                    "Uhhh... this place is great! The Krabby Patties are... food! I like food. Tastes good. I don’t remember what I ordered, but I think it was a Krabby Patty, and I ate the whole thing in like... two bites! That’s a good sign, right? And the service? Super fast! The guy who made my burger looks familiar, but I can’t remember from where. Anyway... I'm definitely coming back. Maybe tomorrow... or right now. Is it open again?"
                    </p>
                    <h6>Patrick Star</h6>
                    <p>Uhh... Professional Sleeper? Rock Enthusiast? Best Friend of SpongeBob?</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev">
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <button type="button" role="presentation" className="owl-next">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
        <div className="owl-dots disabled" />
      </div>
    </div>
  </div>
</section>


    )
}
export default Review