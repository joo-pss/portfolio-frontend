import { Container } from "./Container";
import { Anchors, AnchorsProps } from "./Anchors";
import { Details, DetailsProps } from "./Details";
import { Technologies, TechnologiesProps } from "./Technologies";

export type ProjectProps = AnchorsProps & DetailsProps & TechnologiesProps;

export function Project({
  repositoryPath,
  hasDeploy,
  deployPath,
  name,
  description,
  technologies,
}: ProjectProps) {
  return (
    <Container>
      <Anchors
        repositoryPath={repositoryPath}
        hasDeploy={hasDeploy}
        deployPath={deployPath}
      />
      <Details name={name} description={description} />
      <Technologies technologies={technologies} />
    </Container>
  );
}
