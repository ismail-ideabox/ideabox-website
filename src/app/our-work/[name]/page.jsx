import OurWorkDetails from "@/app/features/ourWorkDetails";

function WorkDetail({ params }) {
  const title = params?.name?.replaceAll("-", " ");
  return <OurWorkDetails workTitle={title} />;
}

export default WorkDetail;
