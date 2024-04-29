import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VM Instance Management Dashboard",
  description:
    "VM Instance Viewer: Post-deployment, users can manage the VM's lifecycle (start, stop, restart), visualize time-series data, and edit source files stored in an S3-like service.",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
