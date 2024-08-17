import { Dispatch, SetStateAction } from "react";

export interface ThankYouCardProps {
    image: string;
    userName: string;
    setStep: Dispatch<SetStateAction<number>>;
}

export interface InputFormProps {
    userName: string;
    setUserName: (name: string) => void;
    onNext: () => void;
  }

  export interface WelcomePopupProps {
    onClose: () => void;
  }

  export interface ImageSelectorProps {
    images: string[];
    onSelectImage: (image: string) => void;
  }