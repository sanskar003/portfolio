import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import gsap from "gsap";
import { resetStatus, submitContact } from "../../Slices/contactSlice";
import AnimatedHeaderSection from "../component/AnimatedHeaderSection";
import Toast from "../component/Toast";
import CircularText from "../components/CircularText";

const Contact = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);
  const [toast, setToast] = useState(null);

  const successRef = useRef();
  const errorRef = useRef();

  const animateToast = (targetRef) => {
    if (!targetRef.current) return;
    gsap.fromTo(
      targetRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  };

  useEffect(() => {
    if (success) {
      animateToast(successRef);
      setToast({ message: "🎉 Message sent successfully!", type: "success" });
    }

    if (error) {
      animateToast(errorRef);
      setToast({ message: "❌ Failed to send message", type: "error" });
    }

    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(resetStatus());
        setToast(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be under 50 characters")
      .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be under 500 characters")
      .required("Message is required"),
    honeypot: Yup.string(), // optional hidden field
  });

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden">
      <AnimatedHeaderSection
        subTitle=""
        title="contact"
        text=""
        textColor="text-black"
        withScrollTrigger
      />
      <div className="absolute -right-50 top-[20%] hidden sm:hidden md:block lg:block">
        <CircularText
          text="CONNECT*WITH*US*CONNECT*WITH*US*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          honeypot: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(submitContact(values));
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form
            method="POST"
            className="grid grid-cols-1 gap-8 px-10 pb-16 md:px-20 text-black font-light font-amiamie text-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                {["name", "email", "message"].map((field) => (
                  <div key={field} className="flex flex-col gap-1">
                    <label>
                      {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      <sup className="text-gold text-[0.9em] font-bold">*</sup>
                    </label>
                    <Field
                      as={field === "message" ? "textarea" : "input"}
                      name={field}
                      placeholder={
                        field === "message"
                          ? "Leave us your Message"
                          : `Enter your ${field}`
                      }
                      required
                      className={`border border-gold/80 px-4 py-2 w-full text-xl rounded-lg focus:ring-2 focus:ring-amber-300 focus:outline-none resize-none ${
                        field === "message" ? "h-[8em] py-4" : "h-12"
                      }`}
                    />
                    <ErrorMessage
                      name={field}
                      component="span"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || loading}
                className="relative cursor-pointer overflow-hidden group flex items-center gap-2 bg-gold hover:bg-gold text-white tracking-widest px-12 py-2 rounded-xl text-2xl shadow-sm transition duration-300 ease-in-out disabled:opacity-50"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                <span className="relative z-10 group-hover:text-gold  transition-colors duration-300 ease-in-out">
                  {loading ? "connecting" : "Submit"}
                </span>
              </button>
            </div>

            <Field
              type="text"
              name="honeypot"
              autoComplete="off"
              style={{ display: "none" }}
            />
          </Form>
        )}
      </Formik>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
