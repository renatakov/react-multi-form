import s from './MultiStepForm.module.css';
import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import pro from './assets/images/icon-pro.svg';
import { useState } from 'react';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState('1')
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }




    return (
        <section className={s.multiStepSection}>
            <aside>
                <ul className="steps">
                    <li className="step step1">
                        <input required type="radio" name="step" id="step1" onChange={(e) => setCurrentStep('1')} />
                        <span>1</span>
                        STEP 1
                    </li>
                    <li className="step step2">
                        <input required type="radio" name="step" id="step2" onChange={(e) => setCurrentStep('2')} />
                        <span>2</span>

                        STEP 2
                    </li>
                    <li className="step step3">
                        <input required type="radio" name="step" id="step3" onChange={(e) => setCurrentStep('3')} />
                        <span>3</span>

                        STEP 3
                    </li>
                    <li className="step step4">
                        <input required type="radio" name="step" id="step4" onChange={(e) => setCurrentStep('4')} />
                        <span>4</span>

                        STEP 4
                    </li>
                </ul>
            </aside>


            <form onSubmit={formSubmit} className={s.multiStepForm}>
                <div className={s.stepDivs}>
                {currentStep === '1' ? 
                    (
                    <div className={s.personalInfoForm}>
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
                        ) : null}
                    {currentStep === '2' ? (
                    <div className={s.selectPlanForm}>
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
                    ) : null}

                    <div  className={s.addOnsForm}></div>
                    <div  className={s.summary}>
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