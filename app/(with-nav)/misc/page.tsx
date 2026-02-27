const courseNotes = [
  { title: "ENGR 108: Matrix Methods", href: "#" },
  { title: "CS 103: Theory of Computation", href: "#" },
  { title: "CS 107: Computer Systems", href: "#" },
  { title: "CS 109: Probability", href: "#" },
  { title: "CS 221: Artificial Intelligence", href: "#" },
  { title: "CS 330: Meta Learning", href: "#" },
];

const golf = {
  handicap: "3.4",
  bestRound: "69 (one-under par) at Mill Creek Golf Course — South Course, Boardman, OH (June 21, 2018)",
  notableCourses: ["Pinehurst #2", "Baltusrol (Lower Course)", "St. Andrews"],
};

export default function Misc() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold text-gray-900">Miscellaneous</h2>

      {/* Course Notes */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-900">Course Notes</h3>
        <p className="text-sm text-gray-600">
          Notes from Stanford courses I&apos;ve taken.
        </p>
        <ul className="space-y-1.5">
          {courseNotes.map((note) => (
            <li key={note.title}>
              <a
                href={note.href}
                className="text-sm text-[#8C1515] hover:underline"
              >
                {note.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Golf */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-900">Golf</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium text-gray-900">Handicap index:</span>{" "}
            {golf.handicap}
          </p>
          <p>
            <span className="font-medium text-gray-900">Best round:</span>{" "}
            {golf.bestRound}
          </p>
          <div>
            <span className="font-medium text-gray-900">
              Notable courses played:
            </span>
            <ul className="mt-1 list-disc list-inside text-gray-600">
              {golf.notableCourses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
