import { memo } from "react";
import DemoComp from "comps/demoComp";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const AboutPage = memo(() => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-32 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-center font-bold text-transparent">
        About Page
      </h1>

      <DemoComp />

      <div className="w-100% mt-10 flex">
        <Button
          className="mx-auto!"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back Home
        </Button>
      </div>
    </div>
  );
});

export default AboutPage;
