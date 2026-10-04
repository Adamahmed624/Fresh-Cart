import ProfileBanner from "../_components/ProfileBanner/page";
import ProfileSidebar from "../_components/ProfileSidebar/page";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <ProfileBanner />
        <div className="container mx-auto grid grid-cols-1 gap-8 py-8 px-4 lg:grid-cols-[320px_1fr]">
          <ProfileSidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </>
  );
}
