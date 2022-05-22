import { array, string } from "prop-types";

import Heading from './Heading';

export default function List({ data, title }) {
  return (
    <>
      <Heading tag="h3" className="text-xl text-gray-900 dark:text-white mb-3">
        {title}
      </Heading>
      <ul>
        {data?.data?.map((t) => (
          <li key={t.id}>- {t.attributes.name}</li>
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