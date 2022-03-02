import Link from 'next/link';

export default function Button({ href }) {
  return (
    <Link href={href}>
      <a className="px-4 py-2 opacity-75 rounded-lg uppercase font-semibold text-slate-50 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center hover:ring-2 ring-blue-500/70 transition-all">
        Link Random
      </a>
    </Link>
  );
}
