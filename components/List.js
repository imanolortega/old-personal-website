import { array, string } from "prop-types";

import Heading from './Heading';

export default function List({ data, title }) {
  return (
    <>
      <Heading tag="h3" className="text-xl text-gray-900 dark:text-white mb-3">
        {title}
      </Heading>
      <ul>
        {data.map((x) => (
          <li key={x.key}>- {x.tech}</li>
        ))}
      </ul>
    </>
  );
}

List.defaultProps = {
  data: [],
  title: ""
};

List.propTypes = {
  data: array,
  title: string
};