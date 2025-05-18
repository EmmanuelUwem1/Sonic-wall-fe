import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: { opacity: 0, pointerEvents: "none", userSelect: "none" },
            })}
          >
            {!connected ? (
              <button
                onClick={openConnectModal}
                className="px-4 py-2 bg-[#2789be] text-white rounded-lg hover:opacity-80 **:transition"
              >
                Connect Wallet
              </button>
            ) : chain.unsupported ? (
              <button
                onClick={openChainModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Wrong Network
              </button>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={openChainModal}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition flex items-center"
                >
                  {chain.hasIcon && (
                    <img
                      src={chain.iconUrl}
                      alt={chain.name}
                      className="w-4 h-4 mr-2 rounded-full"
                    />
                  )}
                  {chain.name}
                </button>
                <button
                  onClick={openAccountModal}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  {account.displayName}{" "}
                  {account.displayBalance ? `(${account.displayBalance})` : ""}
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
