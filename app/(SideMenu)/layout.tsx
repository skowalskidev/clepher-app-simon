import { SideMenu } from "@/components/Navigation/SideMenu";
import { MdCheckBox, MdLink, MdMessage, MdPages, MdQrCode, MdThumbUp } from "react-icons/md";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sm:flex p-6 sm:gap-12">
      <div className="hidden sm:block">
        <SideMenu
          title="Capture Tools"
          menuItems={[
            { icon: <MdLink />, label: "Links Library", disabled: true },
            { icon: <MdPages />, label: "JSON Generator", disabled: true },
            { icon: <MdCheckBox />, label: "Checkbox Plugin", disabled: true },
            { icon: <MdQrCode />, label: "Messenger Code", disabled: true },
            { icon: <MdThumbUp />, label: "Post Engagement", active: true },
            { icon: <MdMessage />, label: "Send To Messenger", disabled: true },
          ]}
        />
      </div>
      <div className="grow">{children}</div>
    </div>

  );
}
