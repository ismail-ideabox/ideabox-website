import OurWorkDetails from "@/app/features/ourWorkDetails";

function WorkDetail({ params }) {
  const title = params?.name?.replaceAll("-", " ");
    // console.log(title)
  return <OurWorkDetails workTitle={title} />;
}

export default WorkDetail;
