import { styled } from "styled-components";

export const FormContainer = styled.div`
    /* border: 2px solid; */
    width: 600px;
    padding: 20px 40px;
    background-color: var(--light-red);
    border-radius: 1rem;
    color: #fff;

    @media (max-width: 767px) {
        width: 100%;
        border-radius: 0;
    }
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px
`

export const ContactInputs = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 1px solid rgba(var(--background-card));
    color: #fff;
    width: 100%;

     &:active, &:focus-visible {
        /* border: none; */
        background-color: transparent;
        outline: none;
        border-bottom: none;
        transition: all 5s ease;
    }
`

export const ContactLabels = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const ContactTextArea = styled.textarea`
border: none;
    background-color: transparent;
    border-bottom: 1px solid rgba(var(--background-card));
    color: #fff;
    resize: none;

    &:hover, &:active, &:focus-visible {
        /* border: none; */
        background-color: transparent;
        outline: none
    }
`

export const FormButton = styled.button`
    align-self: center;
    padding: 10px 20px;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--blue);
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: var(--light-blue);
    }
`   