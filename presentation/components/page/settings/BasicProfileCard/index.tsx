import React, {FC} from 'react';
import Card from "../../../common/Card";
import {ProfileCards} from "../../../../../enums/profileCards";
import PrimaryButton from "../../../common/PrimaryButton";
import {ButtonColors} from "../../../../../enums/styledComponents";
import {BasicCardFooter, BasicCardHeader, BasicCardHeaderSubTitle, BasicHeaderTitle } from './styled';
import {useForm} from "react-hook-form";
import TextInput from "../../../common/TextInput";


export type BasicFormInputs = {
    firstName: string,
    // lastName: string,
    // email: string,
    // phoneNumber: string,
    // country: string,
    // region: string,
}

const BasicProfileCard: FC = () => {

    const {handleSubmit, control} = useForm<BasicFormInputs>({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            firstName: ""
        },

    })
    const onSubmit = (data: BasicFormInputs) => alert(JSON.stringify(data));

    return (
        <Card
            area={ProfileCards.basicProfile}
            header={
                <BasicCardHeader>
                    <BasicHeaderTitle>Basic Profile</BasicHeaderTitle>
                    <BasicCardHeaderSubTitle>The information can be edited from your profile page</BasicCardHeaderSubTitle>
                </BasicCardHeader>
            }
            footer={
                <BasicCardFooter>
                    <PrimaryButton color={ButtonColors.primary} type="submit" form="BasicForm">
                        Save settings
                    </PrimaryButton>
                </BasicCardFooter>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)} id="BasicForm">
                <TextInput
                    control={control}
                    name="firstName"
                    type="text"
                    label="First Name"
                    rules={{
                        required: "That filed is required",
                        minLength: { value: 2, message: "Minimum length is 2 symbols"},
                    }}
                />
            </form>
        </Card>
    );
};

export default BasicProfileCard;