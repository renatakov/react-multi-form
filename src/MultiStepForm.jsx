import s from './MultiStepForm.module.css';
import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import pro from './assets/images/icon-pro.svg';
import { useRef, useEffect } from 'react';

const MultiStepForm = () => {
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    const stepDivs = useRef()
    const inputStep1 = useRef()
    useEffect(() => {

        for (let i = 0; i < 4; i++) {
            if (inputStep1.current.checked && inputStep1.current.value === stepDivs.current.children[i].dataset.step) {
                stepDivs.current.children[i].classList.add(`${s.currentStep}`);
                console.dir(stepDivs.current.children[i]);
            }

        }
        console.dir(stepDivs.current);


    }, []);

    return (
        <section className={s.multiStepSection}>
            <aside>
                <ul className="steps">
                    <li className="step step1">
                        <input ref={inputStep1} checked value={1} type="radio" name="step" id="step1" />
                        STEP 1
                    </li>
                    <li className="step step2">
                        <input type="radio" value={2} name="step" id="step2" />
                        STEP 2
                    </li>
                    <li className="step step3">
                        <input type="radio" value={3} name="step" id="step3" />
                        STEP 3
                    </li>
                    <li className="step step4">
                        <input type="radio" value={4} name="step" id="step4" />
                        STEP 4
                    </li>
                </ul>
            </aside>


            <form onSubmit={formSubmit} className={s.multiStepForm}>
                <div ref={stepDivs} className={s.stepDivs}>

                    <div data-step="1" className={s.personalInfoForm}>
                        <h3>Personal Info</h3>
                        <p>Please provide your name, email address and phone number</p>
                        <div className={s.personalInfo}>

                            <label htmlFor="name">Name</label>
                            <input id='inputName' type="text" name='name' placeholder='e.g. Stephen King' />
                            <label htmlFor="email">Email</label>
                            <input id='inputEmail' type="email" name="email" placeholder='e.g. stephenking@lorem.com' />
                            <label htmlFor="tel">Phone Number</label>
                            <input id='inputTel' type='tel' name="tel" placeholder='e.g. +123456789'></input>
                        </div>
                    </div>
                    <div data-step="2" className="selectPlanForm">
                        <h3>Select Your Plan</h3>
                        <p>You have the option of mounthly or yearly billing</p>
                        <div className="plans">
                            <div className="plan arcade">
                                <img src={arcade} alt="" />
                                <span>Arcade</span>
                                <span>9$/mo</span>
                            </div>
                            <div className="plan advanced">
                                <img src={advanced} alt="" />
                                <span>Advanced</span>
                                <span>12$/mo</span>
                            </div>
                            <div className="plan pro">
                                <img src={pro} alt="" />
                                <span>Pro</span>
                                <span>15$/mo</span>
                            </div>
                        </div>
                    </div>
                    <div data-step="3" className="addOnsForm"></div>
                    <div data-step="4" className="summary">
                        <button type='submit'>Confirm</button>
                    </div>
                </div>

                <div className={s.buttons}>
                    <button className={s.prevBtn}>Go Back</button>
                    <button className={s.nextBtn}>Next Step</button>
                </div>
            </form>

        </section>
    )
}

export default MultiStepForm;