import Typer from "../components/typer";
import HeroIframe from '../components/heroIframe'
import Link from "next/link";

export default () => (
  <div className="bg-gradient-to-br from-theme-secondary via-theme-blue to-theme-primary p-10" style={{height: '100vh'}}>
    <div className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl grid grid-cols-2 portrait:grid-cols-1" >
      <div className="text-white p-10 dark:leading-relaxed">
        Take your <Typer /> <span className="underline">to the moon</span>
        <div>
          <Link href="/design" className="btn btn-light"> <i className="bi bi-layers-half"></i> Launch the Generator</Link> &nbsp;
          <Link href="/view" className="btn btn-dark"> <i className="bi bi-eye"></i> View a Creation</Link>
        </div>
      </div>
      <div>
        <HeroIframe />
      </div>
    </div>
  </div>
);