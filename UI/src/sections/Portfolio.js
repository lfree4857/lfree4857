import React, { useContext, useState } from 'react'
import { buttons, cards } from '../constants/cardConstants'
import { PortfolioModal } from '../components/Modal/PortfolioModal';
import { CommonContext } from '../Context/CommonContext';
import { Contents } from '../constants/portfolioModalContent';
import { CLIENT } from '../constants/environment';

export const Portfolio = () => {
    const [tab, setTab] = useState('all');

    const { state, dispatch } = useContext(CommonContext)
    const { portfolioModal: {
        show,
        modalContent
    } } = state;

    const ShowModal = (id) => {
        const modalData = Contents.filter((val) => val.id === id)[0];
        dispatch({
            type: 'setPortfolioModal', payload: {
                show: true,
                modalContent: modalData,
            }
        })
    }

    return (
        <>
            <section className="w-100 float-left portfolio-con padding-top" id="Portfolio">
                <div className="container">
                    <div className="generic-title text-center">
                        <h6 className="text-white">Creative Works</h6>
                        <h2 className="mb-0 text-white">Check My Portfolio</h2>
                    </div>
                    <div id="myBtnContainer" className="text-center">
                        {buttons.map((button, idx) => <button key={idx} className={`${tab === button.value && 'active active_button'}`} onClick={() => setTab(button.value)}>{button.name}</button>)}
                    </div>
                </div>
            </section>
            <section className="w-100 float-left portfolio-body-con">
                <div className="container">
                    <div className="portfolio-img-con position-relative w-100 float-left wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                        {cards.map((card, idx) => (
                            <div key={idx} className={`filterDiv ${card.dynamicClass} position-relative ${tab === 'all' || card.dynamicClass.includes(tab) ? 'show' : ''}`}>
                                <a href="#" data-toggle="modal" data-target={`#modalporfolio${idx + 1}`} onClick={() => ShowModal(card.id)}>
                                    <div className="portfolio-img position-relative">
                                        <figure>
                                            <img src={`${CLIENT}image/portfolio-img${idx + 1}.png`} alt={`portfolio-img${1}`} className="img-fluid" />
                                        </figure>
                                    </div>
                                </a>
                                <div className="portfolio-img-content text-left">
                                    <div className="portfolio-img-title d-inline-block">
                                        <h4>{card.title}</h4>
                                        <p>{card.shortDesc}</p>
                                    </div>
                                    <a href="#" className="float-lg-right" data-toggle="modal" data-target={`#modalporfolio${idx + 1}-icon`} onClick={() => ShowModal(card.id)}>
                                        <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                {/* <div id="modalporfolio1" class="modal fade" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
                            </div>
                            <div class="modal-body service-model-content">
                                <figure class="mb-0">
                                    <img src="image/portfolio-model-img1.html" alt="portfolio-model-img1" class="img-fluid" />
                                </figure>
                                <h4>Application UI Design</h4>
                                <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <ul class="list-unstyled model-list mb-md-3 mb-2">
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modalporfolio2-icon" class="modal fade" tabIndex="-1" style={{ display: 'none' }} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
                            </div>
                            <div class="modal-body service-model-content">
                                <figure class="mb-0">
                                    <img src="image/portfolio-model-img2.html" alt="portfolio-model-img1" class="img-fluid" />
                                </figure>
                                <h4>Furni furniture UI Design</h4>
                                <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <ul class="list-unstyled model-list mb-md-3 mb-2">
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modalporfolio3" class="modal fade" tabindex="-1" style={{ display: 'none' }} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
                            </div>
                            <div class="modal-body service-model-content">
                                <figure class="mb-0">
                                    <img src="image/portfolio-model-img3.html" alt="portfolio-model-img1" class="img-fluid" />
                                </figure>
                                <h4>Mobile UI Design</h4>
                                <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <ul class="list-unstyled model-list mb-md-3 mb-2">
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modalporfolio3-icon" class="modal fade" tabindex="-1" style={{ display: 'none' }} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
                            </div>
                            <div class="modal-body service-model-content">
                                <figure class="mb-0">
                                    <img src="image/portfolio-model-img3.html" alt="portfolio-model-img1" class="img-fluid" />
                                </figure>
                                <h4>Mobile UI Design</h4>
                                <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <ul class="list-unstyled model-list mb-md-3 mb-2">
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modalporfolio4" class="modal fade" tabindex="-1" style={{ display: "none" }} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
                            </div>
                            <div class="modal-body service-model-content">
                                <figure class="mb-0">
                                    <img src="image/portfolio-model-img4.html" alt="portfolio-model-img1" class="img-fluid" />
                                </figure>
                                <h4>Businesscard UI Design</h4>
                                <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <ul class="list-unstyled model-list mb-md-3 mb-2">
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modalporfolio5" class="modal fade" tabindex="-1" style={{ display: "none" }} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
                            </div>
                            <div class="modal-body service-model-content">
                                <figure class="mb-0">
                                    <img src="image/portfolio-model-img5.png" alt="portfolio-model-img1" class="img-fluid" />
                                </figure>
                                <h4>Real estate UI Design</h4>
                                <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <ul class="list-unstyled model-list mb-md-3 mb-2">
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {show && <PortfolioModal show={show} modalContent={modalContent} dispatch={dispatch} />}
            </section>
        </>
    )
}
