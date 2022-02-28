
import { login } from "../Helpers/requests";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useUserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import { setToken } from "../Helpers/token";

export default function useLogin() {
  const mutation = useMutation((data) => login(data));
  const { user, setUser } = useUserContext();
  const { push } = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const data = await mutation.mutateAsync(formData);
      if (data.isValid) {
        toast.success("Succesful log in!");
        setUser(data.user);
        setToken(data.user.token);
        push("/");
        return;
      }
      toast.error("This account is invalid, try again");
      console.log(data);
    } catch (err) {
      toast.error("Failed to connect");
      console.log(err);
    }
  };
  return { handleSubmit, user, ...mutation };
}
