import SectionTitle from "../Common/SectionTitle";

const SubFeatures = () => {
  return (
    <section
      id="subFeature"
      className="z-10 flex justify-center overflow-hidden bg-primary/[.03]"
    >
      <div className="container">
        <div className="w-1/3">
          <SectionTitle
            title="Crafted for Startup, SaaS and Business Sites."
            paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
            mb="44px"
          />
        </div>
        <div className="w-2/3">
        </div>
      </div>
    </section>
  );
};

export default SubFeatures;
