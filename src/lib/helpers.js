import { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FontFaceObserver from "fontfaceobserver";
import { includes, replace, filter } from "lodash";

// import { bugsnag } from './bugsnag'

/* export function isServer() {
  return typeof window === 'undefined'
} */

export const getByFamily = (products, family) => {
  const familyProducts = filter(products, { familia: family });
  return familyProducts;
};

export const getByCode = (code) => (item) => {
  const isFound1 = item.tablas[0].tabla1.indexOf(code);
  const isFound2 = item.tablas[0].tabla2.indexOf(code);
  return isFound1 !== -1 || isFound2 !== -1;
};

export const getById = (id) => (item) => {
  const isFound3 = item.id.indexOf(id);
  return isFound3 !== -1;
};

/**
 *
 * Checks if fonts has been loaded
 */

export const useFontObserver = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const sourceSansPro = new FontFaceObserver("Source Sans Pro");

  async function check() {
    try {
      await sourceSansPro.load();
      setFontsLoaded(true);
    } catch (err) {
      setFontsLoaded(false);
    }
  }

  check();

  return { fontsLoaded };
};

/**
 * Checks if the user is authorised to view a private page
 */

/* export const withPrivatePageCheck = WrappedComponent => {
  return observer(props => {
    const { authStore, initialized } = useStore()
    const router = useRouter()
    const { pathname } = router

    if (isServer() || !initialized) {
      return null
    }

    if (!authStore.loggedIn && pathname !== '/') {
      router.replace('/login')

      return
    }

    return <WrappedComponent {...props} />
  })
} */

/**
 * Calls a handler when escape key is pressed
 */

export const useEscapePress = (fn, disabled = false) => {
  useEffect(() => {
    if (disabled) {
      return () => {};
    }

    const onKeyDown = (e) => {
      if (e.keyCode === 27) {
        fn();
      }
    };

    document.addEventListener("keydown", onKeyDown, false);

    return () => document.removeEventListener("keydown", onKeyDown, false);
  }, [disabled, fn]);
};

/**
 * Calls a handler when the user clicks outside an element
 */

export const useOutsideElementClick = (ref, fn, disabled = false) => {
  useEffect(() => {
    if (disabled) {
      return () => {};
    }

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [disabled, fn, ref]);
};

/**
 * Calculates the total / completed steps for each
 */

/* export const getCurrentStepStatuses = (completeness, hasCoPetitioners) => {
  const { completenessPercentage, fields } = completeness

  const hasIncomeError = some(fields, field => field.fieldName === 'incomes.low' && !field.complete)
  const requiresCoPetitioner = hasIncomeError && !hasCoPetitioners
  const sections = keyBy(uniq(map(fields, ({ fieldName }) => fieldName.split('.')[0])), section => section)

  const status = mapValues(sections, (_value, sec) => ({
    total: filter(
      fields,
      ({ fieldName, ignoreForCompleteness }) =>
        fieldName.startsWith(sec) && (!ignoreForCompleteness || (sec === 'co-petitioner' && !hasCoPetitioners))
    ).length,
    completed: filter(
      fields,
      ({ fieldName, complete, ignoreForCompleteness }) =>
        fieldName.startsWith(sec) && !ignoreForCompleteness && complete
    ).length,
  }))

  return {
    completenessPercentage,
    section: status,
    requiresCoPetitioner,
  }
}

const getFriendlyStatus = (status, t, part) => {
  switch (status) {
    case GuaranteeStatuses.PRE_APPROVED:
    case GuaranteeStatuses.PRE_APPROVED_WITH_OBSERVATION:
    case GuaranteeStatuses.QUOTED:
      return t(`status.preapproved.${part}`)

    case GuaranteeStatuses.REQUESTED:
      return t(`status.requested.${part}`)

    case GuaranteeStatuses.REJECTED:
      return t(`status.rejected.${part}`)

    case GuaranteeStatuses.PAYMENT_PENDING:
      return t(`status.paymentPending.${part}`)

    case GuaranteeStatuses.GRANTED:
      return t(`status.granted.${part}`)

    case GuaranteeStatuses.ACTIVE:
      return t(`status.active.${part}`)

    case GuaranteeStatuses.APPROVED:
    default:
      return t(`status.approved.${part}`)
  }
}

export const getStatusTitle = (status, t) => {
  return getFriendlyStatus(status, t, 'title')
}

export const getStatusName = (status, t) => {
  return getFriendlyStatus(status, t, 'name')
}

export const isGuaranteeApproved = status => {
  return (
    status === GuaranteeStatuses.APPROVED ||
    status === GuaranteeStatuses.PRE_APPROVED ||
    status === GuaranteeStatuses.PAYMENT_PENDING ||
    status === GuaranteeStatuses.GRANTED ||
    status === GuaranteeStatuses.ACTIVE
  )
} */

/**
 * Upload documents by type
 */

/* export const useDocumentUpload = (documentCategory, documentTypeId) => {
  const { guaranteeStore } = useStore()

  const [progress, setProgress] = useState(null)
  const [name, setName] = useState(null)
  const [error, setError] = useState(null)

  const upload = useCallback(
    async files => {
      try {
        const file = files[0]

        setName(file.name)

        switch (documentCategory) {
          case PETITIONER:
            await guaranteeStore.uploadPetitionerDocument(documentTypeId, file, setProgress)

            break

          case CO_PETITIONER:
            await guaranteeStore.uploadCoPetitionerDocument(documentTypeId, file, setProgress)

            break

          case RENTAL_CONTRACT:
            await guaranteeStore.uploadRentalContract(file, setProgress)

            break
        }

        guaranteeStore.calculateCompleteness()
      } catch (error) {
        bugsnag.notify(error)

        const message = get(error, 'response.data.message')
        setError({ message })
      } finally {
        setProgress(null)
      }
    },
    [guaranteeStore, documentTypeId, documentCategory]
  )

  const uploading = !isNull(progress)

  return { upload, uploading, name, progress, error }
} */

/**
 * Gets the current breakpoint
 */

export const useBreakpoints = () => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();

  const currentBreakpoint =
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || "xs";

  const breakpoints = ["xs", "sm", "md", "lg", "xl"];
  const isUp = (bp) =>
    breakpoints.indexOf(currentBreakpoint) > breakpoints.indexOf(bp);
  const isDown = (bp) =>
    breakpoints.indexOf(currentBreakpoint) < breakpoints.indexOf(bp);

  return {
    currentBreakpoint,
    isUp,
    isDown,
  };
};

export const getWhatsAppData = (t) => ({
  Revisar: t,
  phone: t("footer.phone"),
  link: `https://wa.me/${t("footer.phone").replace(/ |\+/g, "")}`,
});

export const parseCurrencyToNumber = (amount) => {
  let numbericString;

  const hasDecimals = includes(amount, ",");

  if (hasDecimals) {
    numbericString = replace(amount, /[.$]/g, ""); // remove $ and thousands separators
    numbericString = replace(numbericString, ",", "."); // use correct decimal separator
  } else {
    numbericString = replace(amount, /\D/g, ""); // remove all symbols
  }

  return parseFloat(numbericString, 10);
};

/* export const parseNationalIdentityCardToNumber = amount => replace(amount, /\./g, '') */

/**
 * Network helpers
 */

export const removeFormat = (value) => {
  if (value) {
    if (typeof value === "string") {
      const parsed = value
        .replaceAll("-", "")
        .replaceAll(".", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("R$", "")
        .replaceAll("S/", "")
        .replace(/[^\d]+/g, "");
      return parsed;
    }
  }
  return value;
};

export const isNetworkError = (error) =>
  error.message === "Network Error" ||
  error.message === "Network request failed" ||
  includes(error.message, "timeout");

export const isServerError = (error) =>
  includes(error.response.status, "5[0-9][0-9]");
