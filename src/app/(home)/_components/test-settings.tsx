

export default function TestSettings() {
  return (
    <section className="mx-auto mt-8 w-full">
      <div className="flex items-center justify-center gap-4 bg-green-200 px-6 py-2 text-sm font-medium">
        <button className="flex gap-1 items-center">
          <span>#</span> time
        </button>
        <button>words</button>
        <div className="w-[2px] h-4 bg-[#323437]" />
        <button>15</button>
        <button>30</button>
        <button>60</button>
      </div>
    </section>
  )
}