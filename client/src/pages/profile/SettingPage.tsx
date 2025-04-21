import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ProfileForm } from "./components/settings/ProfileForm"
import { AccountForm } from "./components/settings/AccountForm"
import { Separator } from "@/components/ui/separator"

const settingsSections = [
  { key: "profile", label: "Profile" },
  { key: "account", label: "Account" },
  { key: "publishing", label: "Publishing" },
  { key: "notification", label: "Notification" },
]

export const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("profile")

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileForm />
      case "account":
        return <AccountForm />
      case "publishing":
        return <div className="text-sm text-muted-foreground">Publishing settings coming soon.</div>
      case "notification":
        return <div className="text-sm text-muted-foreground">Notification preferences coming soon.</div>
      default:
        return null
    }
  }

  return (

    <main>
      <section className="flex">

        <div className="flex-2 px-20">
          <div className="flex-2 max-w-3xl">{renderContent()}</div>
        </div>

        <div className="flex-1 hidden lg:block">


          {/* TOBE S */}
          <aside className="sticky top-4 h-[calc(100vh-10rem)]">
            <div className="h-full overflow-y-auto p-4 space-y-7 bg-white rounded-2xl shadow-sm">

              <nav className="flex flex-col gap-2 py-4 px-2">
                {settingsSections.map(({ key, label }) => (
                  <React.Fragment key={key}>
                  <Separator className="bg-accent"/>
                    <Button
                      key={key}
                      variant={activeSection === key ? "secondary" : "ghost"}
                      className={cn(
                        "justify-start w-full text-left p-6",
                        activeSection === key && "font-semibold"
                      )}
                      onClick={() => setActiveSection(key)}
                    >
                      {label}
                    </Button>
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}


