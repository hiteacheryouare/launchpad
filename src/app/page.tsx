import Typer from "../components/typer";
import HeroIframe from '../components/heroIframe'
import Link from "next/link";

export default () => {
  return (
    <div className="p-10 bg-gradient-to-br from-theme-secondary via-theme-blue to-theme-primary font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl grid grid-cols-2 portrait:grid-cols-1">
      <div className="text-white p-10 leading-relaxed">
        Take your <Typer /> <span className="underline">to the moon</span>
        <div>
          <Link href="/design" className="btn btn-light">Launch the Generator</Link> &nbsp;
          <Link href="/view" className="btn btn-dark">View a Creation</Link>
        </div>
      </div>
      <div>
        <HeroIframe />
      </div>
    </div>
  );
};