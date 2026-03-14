function getExecutionPlan(allBrowsers, blockedBrowsers) {
  const runnable = allBrowsers.filter(
    browser => !blockedBrowsers.includes(browser)
  );

  const blocked = allBrowsers.filter(
    browser => blockedBrowsers.includes(browser)
  );

  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return {
    runnableBrowsers: runnable,
    blockedBrowsers: blocked,
    executionPlan: plan
  };
}

const result = getExecutionPlan(allBrowsers, blockedBrowsers);
console.log(result);