import workData from "@/app/data/work";
import OurWorkDetails from "@/app/features/ourWorkDetails";
import { redirect } from "next/navigation";
function WorkDetail({ params }) {
  const workTitle = params?.name?.split("/")?.pop()?.replaceAll("-", " ");

  const filteredWork = workData.find(
    (ele) =>
      ele.projectName.toLocaleLowerCase() === workTitle.toLocaleLowerCase()
  );
  if (!filteredWork) {
    redirect("/404");
  }

  return (
    <>
      <head>
        <title>{filteredWork?.projectName + " | Ideabox"}</title>
        <meta name="description" content={filteredWork.metaDescription} />
        <link rel="canonical" href={filteredWork.canonicalTag} />
      </head>
      <div>
        <OurWorkDetails filteredWork={filteredWork} />
      </div>
    </>
  );
}

export default WorkDetail;
