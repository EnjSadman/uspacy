"use client"

import "./styles.css"
import { Box, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { SubmitButton } from "../SubmitButton/SubmitButton"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useState } from "react"

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  question?: string;
}

export function Form() {
  const {register, handleSubmit, watch, formState:{errors}} = useForm<FormData>();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const company = watch("company");
  const phone = watch("phone");
  const email = watch("email");
  const question = watch("question");

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return(
    <Box 
      component="form"
      className="form form__container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="montserrat form__heading">
        Відвідати<br />
        онлайн-конференцію
      </h3>
        <TextField
          className={(errors.firstName) ? "form__input form__input--error" : "form__input"}
          {...register("firstName", { required: "Це поле обовʼязкове" })}
          label={(errors.firstName || firstName) ? "Імʼя * " : ""}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ""}
          placeholder="Імʼя *"
          slotProps={{
            inputLabel:{
              shrink: true
            }
          }}
        />
        <TextField
            className={(errors.lastName) ? "form__input form__input--error" : "form__input"}
            {...register("lastName", { required: "Це поле обовʼязкове" })}
            label={(errors.lastName || lastName) ? "Прізвище * " : ""}
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ""}
            placeholder="Прізвище *"
            slotProps={{
              inputLabel:{
                shrink: true
              }
            }}
          />
          <TextField
          className={(errors.company) ? "form__input form__input--error" : "form__input"}
          {...register("company", { required: "Це поле обовʼязкове" })}
          label={(errors.company || company) ? "Компанія * " : ""}
          error={!!errors.company}
          helperText={errors.company ? errors.company.message : ""}
          placeholder="Компанія *"
          slotProps={{
            inputLabel:{
              shrink: true
            }
          }}
        />
        <TextField
          className={(errors.email) ? "form__input form__input--error" : "form__input"}
          {...register("email", { required: "Це поле обовʼязкове" })}
          label={(errors.email || email) ? "Адреса електронної пошти *" : ""}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          placeholder="Прізвище *"
          slotProps={{
            inputLabel:{
              shrink: true
            }
          }}
        />
          
        <TextField 
          className={(errors.phone) ? "form__input form__input--error" : "form__input"}
          {...register("phone", { required: "Це поле обовʼязкове" })}
          label={(errors.phone || phone) ? "Номер мобільного телефону * " : ""}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ""}
          placeholder="Номер мобільного телефону *"
          slotProps={{
            inputLabel:{
              shrink: true
            }
          }}
        />
        
        <TextField
          className="form__input"
          {...register("question")}
          multiline
          label={(question) ? "Ваше запитання" : ""}
          placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть
          кому саме и б хотіли його поставити"
          slotProps={{
            inputLabel:{
              shrink: true
            }
          }}
        />
        <Box
          className="checkbox-wrapper manrope"
          onClick={() => {
            setAgreedToTerms(!agreedToTerms);
          }}
        >
          <div 
            className="checkbox"    
          >
            <CheckOutlinedIcon 
              sx={{
                display : (agreedToTerms) ? "block" : "none",
                width: "24px",
                height: "24px"
              }}
            />
          </div>
          <p>
            Реєструючись, я повністю погоджуюся з <a href="#">Політикою конфіденційності Uspacy</a>
          </p>
        </Box>
        <SubmitButton disabled={Object.keys(errors).length > 0 || !agreedToTerms} />
    </Box>
  )
}