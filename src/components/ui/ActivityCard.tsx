import { Activity } from "@/data/activities";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="group relative h-[380px] w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-sage sm:w-[300px]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url('${activity.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-300 group-hover:from-charcoal/95" />

      <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <h3 className="font-display text-xl text-white">{activity.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/75">
          {activity.description}
        </p>
      </div>
    </div>
  );
}
