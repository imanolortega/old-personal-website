import { array, string } from "prop-types";

import Heading from "../sections/Heading";
import ButtonWithIcon from "../buttons/ButtonWithIcon";

export default function ProjectCard({
  externalLink,
  githubLink,
  gradient,
  tags,
  title,
}) {
  return (
    <div className="relative w-full group">
      <div
        className={`absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r ${gradient} opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur mb-2`}></div>
      <div className="transform transition-all rounded-xl w-full p-1 mb-2">
        <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
          <Heading
            tag="h3"
            className="text-lg md:text-lg font-medium mb-2 sm:mb-5 w-full text-gray-900 dark:text-gray-100">
            {title}
          </Heading>
          <div className="text-gray-800 dark:text-gray-200 capsize">
            {tags &&
              tags?.map((t) => (
                <p
                  key={t.id}
                  className="text-xs text-gray-800 dark:text-white mb-1">
                  {t.attributes.name}
                </p>
              ))}
          </div>
          <div className="flex justify-end space-x-1">
            <ButtonWithIcon icon="github" isAProject path={githubLink} />
            <ButtonWithIcon icon="external_link" isAProject path={externalLink} />
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  externalLink: "",
  githubLink: "",
  gradient: "",
  tags: [],
  title: "",
};

ProjectCard.propTypes = {
  externalLink: string,
  githubLink: string,
  gradient: string,
  tags: array,
  title: string,
};
