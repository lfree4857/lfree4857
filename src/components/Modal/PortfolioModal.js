"use client";

import React from 'react';
import { CLIENT } from '../../constants/environment';

export const PortfolioModal = ({ show, modalContent, dispatch }) => {

    const closeModal = () => dispatch({ type: 'closePortfolioModal' })

    return (
        <div class={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }} aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button onClick={closeModal} type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
                    </div>
                    <div class="modal-body service-model-content">
                        <figure class="mb-0">
                            <img src={`${CLIENT}image/${modalContent?.img}`} alt="portfolio-model-img1" class="img-fluid" />
                        </figure>
                        <h4>{modalContent?.header}</h4>
                        <p class="mb-md-4 mb-2">{modalContent?.para1}</p>
                        <ul class="list-unstyled model-list mb-md-3 mb-2">
                            {modalContent?.checkList?.map((para, idx) => <li key={idx}><i class="fas fa-check-circle"></i> {para}</li>)}
                        </ul>
                        <p class="mb-0">{modalContent?.para2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
