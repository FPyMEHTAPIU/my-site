import calculateContainerSize from "@/composables/calculateContainerSize";

const FillCardSkills = (projectSkills: string[]) => {
  const { isDesktop1440 } = calculateContainerSize();

  return projectSkills.map((skill: string, index: number) => (
    <div className="skill project-skill" key={index}>
      <p
        className="body-small"
        style={{ fontSize: isDesktop1440 ? 16 : "revert-layer" }}
      >
        {skill}
      </p>
    </div>
  ));
};

export default FillCardSkills;
