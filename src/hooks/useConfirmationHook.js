import React from 'react'

const confirmationMessage = "You have unsaved changes. Continue?";

const useConfirmationHook = (isUnsafeTabClose) => {
  React.useEffect(() => {
    const handleBeforeUnload = (event) => {
        if (isUnsafeTabClose) {
            event.returnValue = confirmationMessage;
            return confirmationMessage;
        }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () =>
        window.removeEventListener("beforeunload", handleBeforeUnload);
}, [isUnsafeTabClose]);
}

export default useConfirmationHook


