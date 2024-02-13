import s from './MultiStepForm.module.css';
import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import pro from './assets/images/icon-pro.svg';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form'

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userInfo, setUserInfo] = useState();
    const nextBtnRef = useRef();
    const prevBtnRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const formSubmit = (e) => {
        setUserInfo(e)
    };
    useEffect(() => {
        nextBtnRef.current.addEventListener('click', () => {
            setCurrentStep(currentStep + 1);
            console.log(currentStep);

            if (currentStep >= 4) {
                setCurrentStep(1)
            }
        })
        prevBtnRef.current.addEventListener('click', () => {
            
            if(currentStep > 1){
                setCurrentStep(currentStep - 1)
            }
        });
    }, [currentStep])
    return (
        <section className={s.multiStepSection}>
            <aside>
                <ul className="steps">
                    <li className="step step1">
                        <input required type="radio" name="step" id="step1" onChange={(e) => setCurrentStep(1)} />
                        <span>1</span>
                        STEP 1
                    </li>
                    <li className="step step2">
                        <input required type="radio" name="step" id="step2" onChange={(e) => setCurrentStep(2)} />
                        <span>2</span>

                        STEP 2
                    </li>
                    <li className="step step3">
                        <input required type="radio" name="step" id="step3" onChange={(e) => setCurrentStep(3)} />
                        <span>3</span>

                        STEP 3
                    </li>
                    <li className="step step4">
                        <input required type="radio" name="step" id="step4" onChange={(e) => setCurrentStep(4)} />
                        <span>4</span>

                        STEP 4
                    </li>
                </ul>
            </aside>
            <form onSubmit={handleSubmit(formSubmit)} className={s.multiStepForm}>
                <div className={s.stepDivs}>
                    {currentStep === 1 ?
                        (
                            <div className={s.personalInfoForm}>
                                <h3>Personal Info</h3>
                                <p>Please provide your name, email address and phone number</p>
                                <div className={s.personalInfo}>
                                    <div className={s.inputInfo}>
                                        <label htmlFor="name">Name</label>
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <input className={errors.name ? `${s.invalid}` : null} {...register('name', { required: true })} id='inputName' type="text" placeholder='e.g. Stephen King' />
                                    <div className={s.inputInfo}>
                                        <label htmlFor="email">Email</label>
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <input className={errors.email ? `${s.invalid}` : null} {...register('email', { required: true })} id='inputEmail' type="email" placeholder='e.g. stephenking@lorem.com' />
                                    <div className={s.inputInfo}>
                                        <label htmlFor="tel">Phone Number</label>
                                        {errors.tel && <span>This field is required</span>}

                                    </div>
                                    <input className={errors.tel ? `${s.invalid}` : null} {...register('tel', { required: true })} id='inputTel' type='tel' placeholder='e.g. +123456789'></input>
                                </div>
                            </div>
                        ) : null}
                    {currentStep === 2 ? (
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
                    {currentStep === 3 ? (
                        <div className={s.addOnsForm}></div>
                    ) : null}

                    {currentStep === 4 ? (

                    <div className={s.summary}>
                        <button type='submit'>Confirm</button>
                    </div>
                    ):null}
                </div>

                <div className={s.switchStepsButtons}>
                    
                    <button ref={prevBtnRef} className={s.prevBtn}>Go Back</button>
                    <button ref={nextBtnRef} className={s.nextBtn}>Next Step</button>
                </div>
            </form>

        </section>
    );
};

export default MultiStepForm;