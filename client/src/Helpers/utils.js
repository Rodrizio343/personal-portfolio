import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { EMAILJS } from "../Config/config";
import Compressor from 'compressorjs';

export function blobToUrl(blob, cb) {
  if (!blob) return cb(null);
  new Compressor(blob, {
    quality: 0.2,
    success(result) {
      const fr = new FileReader();
      fr.onload = () => cb(fr.result);
      fr.readAsDataURL(result);
    },
    error(err) {
      console.log(err.message);
    },
  });
}

export const route = (
  path,
  { component, redirect = false, layout = true, ...args }
) => ({
  path,
  component,
  exact: true,
  layout,
  redirect,
  ...args,
});

export async function sendForm(data) {
  try {
    const emailForMe = await emailjs.send(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID_FOR_ME,
      data,
      EMAILJS.USER_ID
    );
    
    await emailjs.send(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID_FOR_USER,
      data,
      EMAILJS.USER_ID
    );

    if (emailForMe.status === 200) {
      toast.success("Message sent");
    } else {
      toast.error("Error to send, status: " + emailForMe.status);
    }
  } catch (error) {
    toast.error("Error to send message");
    console.log(error);
  }
}
